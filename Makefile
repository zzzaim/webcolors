# Find all palette source .js files in "src/palettes/*" directories
palette-js = $(shell find src/palettes -type f -name '*.js')
palette-dirs = $(shell find src/palettes -mindepth 1 -maxdepth 1 -type d)
pals = $(notdir $(palette-dirs))

# Find all available output templates (css, less, scss, style, etc.)
templates = $(wildcard src/template/*.mustache)
tpls  = $(notdir $(basename $(templates)))
tpls := $(filter-out %.js,$(tpls))

# Generate all target filenames
target-js   = $(palette-js:src/palettes/%=%)
target-json = $(palette-js:src/palettes/%.js=%.json)
target-tpl  = $(foreach t,$(tpls),$(target-js:%.js=%.$(t)))
target-tpl := $(target-tpl:%/index.scss=%/_index.scss)
target-all  = $(pals) $(target-js) $(target-json) $(target-tpl)

# Generate all doc targets
target-docs  = $(shell find src/docs -type f -name '*.pug')
target-docs := $(target-docs:src/%.pug=%.html)
target-docs += docs/styles.css

# Tailwind CSS
tailwind-pkg = $(shell node -p 'require.resolve("tailwindcss/package.json")')
tailwind-css = $(shell node -p 'require.resolve("tailwindcss/tailwind.css")')

# [1] Recipe for <palette>/_index.scss files
define sass-recipe=
$(1)/_index.scss: src/palettes/$(1)/index.js src/template/scss.mustache
	node src/render $$^ > $$@
endef

# [2] Recipe for <pallete>/*.{css,less,scss,styl} files
define tpl-recipe=
$(1)/%.$(2): src/palettes/$(1)/%.js src/template/$(2).mustache
	node src/render $$^ > $$@
endef

# [3] Recipe <palette>/*.js files
define js-recipe=
$(1)/%.js: src/palettes/$(1)/%.js
	node src/render --js $$^ > $$@
endef

# [4] Recipe for <palette>/*.json files
define json-recipe=
$(1)/%.json: src/palettes/$(1)/%.js
	node src/render --json $$^ > $$@
endef

all: $(target-all) index.js package.json

docs: $(target-docs)

clean:
	rm -rf $(pals) docs

index.js: src/index.js src/template/index.js.mustache $(palette-js)
	npx mustache $(wordlist 1,2,$^) > $@

package.json: $(palette-js)
	node src/contributors

docs/%.html: src/docs/%.pug
	@mkdir -p $(@D)
	npx posthtml $< -o $@

docs/styles.css: $(tailwind-css) $(tailwind-pkg)
	@mkdir -p $(@D)
	npx postcss $< -o $@

# Palette directories
$(pals):
	mkdir -p $@

# [1] Generate <palette>/_index.scss receipes
$(foreach p,$(pals),$(eval $(call sass-recipe,$(p))))

# [2] Generate <pallete>/*.{css,less,scss,styl} recipes
$(foreach p,$(pals),$(foreach t,$(tpls),$(eval $(call tpl-recipe,$(p),$(t)))))

# [3] Generate <palette>/*.js recipes
$(foreach p,$(pals),$(eval $(call js-recipe,$(p))))

# [4] Generate <palette>/*.json recipes
$(foreach p,$(pals),$(eval $(call json-recipe,$(p))))

print-%:
	@echo "$* = $($*)"

.PHONY: all docs clean
