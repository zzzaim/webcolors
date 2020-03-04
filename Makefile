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
targets += packages/webcolors/README.md

target-docs += $(wildcard docs/src/*.svg)
target-docs += $(wildcard docs/src/*.css)
target-docs += $(wildcard docs/src/*.pug)
target-docs := $(target-docs:docs/src/%=docs/%)
target-docs := $(target-docs:.pug=.html)

deps-docs  = $(wildcard .*rc.js)
deps-docs += $(js)

export \
	git_head = $(shell git rev-parse --short HEAD)

define mustache=
	npx --no-install mustache $^ > $@
endef

define copy=
	@mkdir -p $(@D)
	cp $< $@
endef

define node=
	@mkdir -p $(@D)
	node $^ > $@
endef

define json-recipe=
$(1): tasks/json.js $(dir $(1))src/$(notdir $(1:.json=.js))
	$$(node)
endef


all: $(targets)

clean:
	rm -rf .cache
	rm -rf $(targets)

docs: $(target-docs)

docs/%.html: docs/src/%.pug $(deps-docs)
	@mkdir -p $(@D)
	doc_dir=$(@D) \
	doc_source=$< \
	doc_output=$@ \
		npx posthtml $< -o $@

docs/%.svg: docs/src/%.svg
	@mkdir -p $(@D)
	npx svgo $< -o $@

docs/styles.css: docs/src/styles.css $(deps-docs)
	@mkdir -p $(@D)
	npx postcss $< -o $@


packages/webcolors/README.md: README.md
	cp $< $@

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
	$(node)


print-%:
	@echo $($*)

env-%:
	@echo $${$*}


.PHONY: all docs clean
