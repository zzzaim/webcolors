# Generate list of available output templates
templates  = $(wildcard src/template/*.mustache)
templates := $(notdir $(basename $(templates)))
templates := $(filter-out %.js,$(templates))

# Generate list of all templated targets
palettes = $(shell find src/palettes -type f -name '*.js')
targets  = $(palettes)
targets += $(foreach t,$(templates),$(palettes:.js=.$(t)))
targets := $(targets:index.scss=_index.scss)
targets := $(targets:src/palettes/%=%)

# Generate list of all index.js and index.json targets
palette-dirs = $(shell find src/palettes -maxdepth 1 -mindepth 1 -type d)
palette-ids  = $(notdir $(palette-dirs))
targets += $(foreach p,$(palette-ids),$(p)/index.js)
targets += $(targets:.js=.json)

# Add palette root directories to targets
targets := $(palette-ids) $(targets)

# Tell make to look for .js files here
vpath %.js src/palettes

# Output recipe template
define tpl-recipe=
%.$(1): %.js src/template/$(1).mustache
	$$(render)
endef

# Template render command
define render=
	node src/render $(wordlist 1, 2, $^) > $@
endef

all: $(targets) package.json

clean:
	rm -rf $(palette-ids)

index.js: src/template/index.js.mustache
	npx mustache src/index.js $^ > $@

package.json: $(palettes)
	node src/contributors

# Special handling of _index.scss files
%/_index.scss: \
	%/index.js \
	src/template/scss.mustache
	$(render)

%.json: %.js
	node src/render --json $< > $@

%.js:
	node src/render --js src/palettes/$*.js > $@

# Palette directories
$(palette-ids):
	mkdir -p $@

# Auto-generate output recipes
$(foreach t,$(templates),$(eval $(call tpl-recipe,$(t))))

print-%:
	@echo "$* = $($*)"

.PHONY: all clean
