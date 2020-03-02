# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.1](https://github.com/zzzaim/webcolors/compare/v2.0.0...v2.0.1) (2020-03-02)


### Bug Fixes

* correctly include webcolors package files ([4cd1e48](https://github.com/zzzaim/webcolors/commit/4cd1e48212e81c10f66c1285e37c66df9b6ea05b))

## [2.0.0](https://github.com/zzzaim/webcolors/compare/v1.2.2...v2.0.0) (2020-03-02)


### ⚠ BREAKING CHANGES

* Material palette now uses external `material-ui-colors`
npm package to source its colors.
* drop `color-*` prefix in variable names.
* this package will no longer be published to bower

### Features

* add more flatui palette schemes ([04565a6](https://github.com/zzzaim/webcolors/commit/04565a615cecb32db04b7385bdea0d0fa28823d5))
* add new "bootstrap" color palette (fixes [#3](https://github.com/zzzaim/webcolors/issues/3)) ([3fefce0](https://github.com/zzzaim/webcolors/commit/3fefce0de875782a47e544dcce2df2ad3957f743))
* add new "bulma" color palette (fixes [#4](https://github.com/zzzaim/webcolors/issues/4)) ([eb54e6c](https://github.com/zzzaim/webcolors/commit/eb54e6c6d31e76143da30ec3b31c6ffa913af4d5))
* add TailwindCSS color palette ([a62d1ca](https://github.com/zzzaim/webcolors/commit/a62d1ca7b037a767db3ae053ccffe92bf43fdee3))
* drop support for bower ([5a76e37](https://github.com/zzzaim/webcolors/commit/5a76e3774c7cda9aa09f6f592a17f4521b368cc9))
* palette scripts can now export functions ([81327c0](https://github.com/zzzaim/webcolors/commit/81327c04f77fd00a42fd8665dca20f79c1d52e2f))
* use colors.css package as source ([9b5f3f7](https://github.com/zzzaim/webcolors/commit/9b5f3f7e75448edc1e33e87691d93de5a5f21a0b))
* use material-ui-colors package as source ([5a29d16](https://github.com/zzzaim/webcolors/commit/5a29d16b770dced2d54a82951f0db9876bb58be2))


### Bug Fixes

* add index.js package.json targets in Makefile ([d0640e2](https://github.com/zzzaim/webcolors/commit/d0640e23b9a0cd0fe30d0ffcb5b21bb9ebc742bc))
* add missing flatui/*.js files ([0d03b3b](https://github.com/zzzaim/webcolors/commit/0d03b3bf60721965244d2ac7c712c894a75afbd4))
* add proper color value for material.fuchsia ([d763971](https://github.com/zzzaim/webcolors/commit/d763971f32a502d9e672d678e7f2463d06c2cb69))
* proper normalization of colors ([047e515](https://github.com/zzzaim/webcolors/commit/047e515a06a4d19f6289e8c19d9694e01ee786c7))
* require path in bootstrap bulma src ([3a0bfdf](https://github.com/zzzaim/webcolors/commit/3a0bfdf0dc1709253e678de4de4be24b5215e253))
* syntax error in .eslintrc.js ([23193b2](https://github.com/zzzaim/webcolors/commit/23193b2e616865a45e819f91fc2b43b7eb5eb3b5))
* use default CSS keywords for undefined colors ([e92a94d](https://github.com/zzzaim/webcolors/commit/e92a94d5ad9072f438dee3dfc9e1fd20897be1b3))


* use make and mustache for build chain ([925ce0e](https://github.com/zzzaim/webcolors/commit/925ce0ea633e6a8998ec23e7a896c5f5ab6861cd))
