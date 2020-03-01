js = $(shell find packages -type f -path 'packages/*/src/*.js')

targets = $(subst /src/,/,$(js))
targets-json := $(targets:.js=.json)
targets-css  := $(targets:.js=.css)
targets-less := $(targets:.js=.less)
targets-scss := $(targets:.js=.scss)
targets-scss := $(targets-scss:index.scss=_index.scss)
targets-styl := $(targets:.js=.styl)

targets += $(targets-json)
targets += $(targets-css)
targets += $(targets-less)
targets += $(targets-scss)
targets += $(targets-styl)
targets := $(targets) $(targets:packages/%=packages/webcolors/%)
targets += packages/webcolors/index.js

target-docs  = $(shell find docs/src -type f -name '*.pug')
target-docs := $(target-docs:docs/src/%.pug=docs/%.html)
target-docs += docs/styles.css
deps-docs  = $(wildcard .*rc.js)
deps-docs += $(js)

define mustache=
	npx --no-install mustache $^ > $@
endef

define copy=
	@mkdir -p $(@D)
	cp $< $@
endef

define json-recipe=
$(1): $(dir $(1))src/$(notdir $(1:.json=.js))
	node tasks/json $$< > $$@
endef


all: $(targets)

clean:
	rm -rf .cache
	rm -rfd $(targets)

docs: $(target-docs)

docs/%.html: docs/src/%.pug $(deps-docs)
	@mkdir -p $(@D)
	npx posthtml $< -o $@

docs/styles.css: docs/src/styles/index.css $(deps-docs)
	@mkdir -p $(@D)
	npx postcss $< -o $@


packages/webcolors/index.js: tasks/index.js templates/index.js.mustache
	$(mustache)

packages/webcolors/%.json: packages/%.json
	$(copy)

packages/webcolors/%.js: packages/%.js
	$(copy)

packages/webcolors/%.css: packages/%.css
	$(copy)

packages/webcolors/%.less: packages/%.less
	$(copy)

packages/webcolors/%.scss: packages/%.scss
	$(copy)

packages/webcolors/%.styl: packages/%.styl
	$(copy)


$(foreach f,$(targets-json),$(eval $(call json-recipe,$(f))))

packages/%.js: .cache/%.json templates/js.mustache
	$(mustache)

packages/%.css: .cache/%.json templates/css.mustache
	$(mustache)

packages/%.less: .cache/%.json templates/less.mustache
	$(mustache)

packages/%/_index.scss: .cache/%/index.json templates/scss.mustache
	$(mustache)

packages/%.scss: .cache/%.json templates/scss.mustache
	$(mustache)

packages/%.styl: .cache/%.json templates/styl.mustache
	$(mustache)


.cache/%.json: tasks/view.js packages/%.json
	@mkdir -p $(@D)
	@node $^ > $@


print-%:
	@echo $($*)


.PHONY: all docs clean
