# Generate list of available output templates
templates  = $(wildcard build/template/*.mustache)
templates := $(notdir $(basename $(templates)))
templates := $(filter-out %.js,$(templates))

# Generate list of all templated targets
palettes = $(shell find build/palettes -type f -name '*.js')
targets  = $(foreach t,$(templates),$(palettes:.js=.$(t)))
targets := $(targets:index.scss=_index.scss)
targets := $(targets:build/palettes/%=%)

# Generate list of all index.js and index.json targets
palette-dirs = $(shell find build/palettes -maxdepth 1 -mindepth 1 -type d)
targets += $(foreach p,$(notdir $(palette-dirs)),$(p)/index.js)
targets += $(targets:.js=.json)

# Output recipe template
define tpl-recipe=
%.$(1): %.js build/template/$(1).mustache build/view.js
	$$(render)
endef

# Template render command
define render=
	@mkdir -p $(@D)
	build/render.sh $^ > $@
endef

all: $(targets)

clean:
	rm -rf $(targets)

index.js: build/view.js build/template/index.js.mustache
	npx mustache $^ > $@

# Special handling of _index.scss files
%/_index.scss: \
	%/index.js \
	build/template/scss.mustache \
	build/view.js
	$(render)

%/index.json: %/index.js
	@mkdir -p $(@D)
	node -p 'JSON.stringify(require("./$^"), null, 2)' > $@

%/index.js: build/palettes/%/index.js
	@mkdir -p $(@D)
	cp $^ $@

# Auto-generate output recipes
$(foreach t,$(templates),$(eval $(call tpl-recipe,$(t))))

print-%:
	@echo "$* = $($*)"

.PHONY: all clean
