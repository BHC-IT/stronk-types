## [5.5.3](https://github.com/BHC-IT/stronk-types/compare/v5.5.2...v5.5.3) (2023-11-01)


### Bug Fixes

* Correctly export for use with CommonJS ([09f3879](https://github.com/BHC-IT/stronk-types/commit/09f3879a0d8f946a50a057d46e9c6056c3bde8c4))

## [5.5.2](https://github.com/BHC-IT/stronk-types/compare/v5.5.1...v5.5.2) (2023-11-01)

## [5.5.1](https://github.com/BHC-IT/stronk-types/compare/v5.5.0...v5.5.1) (2023-10-23)

# [5.5.0](https://github.com/BHC-IT/stronk-types/compare/v5.4.1...v5.5.0) (2023-09-29)


### Features

* **Json:** Add simple Json types ([08c6cea](https://github.com/BHC-IT/stronk-types/commit/08c6ceaa1ce00cad502530896f5da17d66cd7f1e))

## [5.4.1](https://github.com/BHC-IT/stronk-types/compare/v5.4.0...v5.4.1) (2023-09-19)


### Bug Fixes

* **ObjectUtils:** Partialise uses Pick with Keys instead of keyof T ([8b2ebe1](https://github.com/BHC-IT/stronk-types/commit/8b2ebe16f8a269644516f7cc65a9b3c1be12ebca))

# [5.4.0](https://github.com/BHC-IT/stronk-types/compare/v5.3.0...v5.4.0) (2023-09-18)


### Features

* **ObjectUtils:** Add Partialise ([07160ca](https://github.com/BHC-IT/stronk-types/commit/07160ca0fea0245d284b6e50aa3ce7cc23edcd59))

# [5.3.0](https://github.com/BHC-IT/stronk-types/compare/v5.2.0...v5.3.0) (2023-08-16)


### Features

* **Util:** Add NumericRange<Start, End> ([7d2cd97](https://github.com/BHC-IT/stronk-types/commit/7d2cd97ca3a773db036ad3d165f9e8977cb283ba))

# [5.2.0](https://github.com/BHC-IT/stronk-types/compare/v5.1.1...v5.2.0) (2023-06-27)


### Features

* **Conditionals:** Add IsUnion and corresponding Ifs ([66701bc](https://github.com/BHC-IT/stronk-types/commit/66701bc42872f4a52889302044efc0008a4bdc6d))

## [5.1.1](https://github.com/BHC-IT/stronk-types/compare/v5.1.0...v5.1.1) (2023-06-25)


### Bug Fixes

* MergeInsertions can't be used as a type ([cb7a663](https://github.com/BHC-IT/stronk-types/commit/cb7a6630d2ec578b6c365e92b68a237e970d80db))

# [5.1.0](https://github.com/BHC-IT/stronk-types/compare/v5.0.2...v5.1.0) (2023-06-24)


### Features

* **Util:** Add PickByType ([ec276b3](https://github.com/BHC-IT/stronk-types/commit/ec276b3ae2b1ac7271980fd7b45daf070ccef267))

## [5.0.2](https://github.com/BHC-IT/stronk-types/compare/v5.0.1...v5.0.2) (2023-06-17)


### Code Refactoring

* **Util:** MergeInserstions now goes deep by default ([11f434d](https://github.com/BHC-IT/stronk-types/commit/11f434d9ecc8d2ecb4105e7f2e42f815bb2a2976))


### BREAKING CHANGES

* **Util:** MergeInsertions goes deep by default. To merge only top level, use `MergeInsertions.TopLevel`

## [5.0.1](https://github.com/BHC-IT/stronk-types/compare/v5.0.0...v5.0.1) (2023-06-13)


### Bug Fixes

* Package doesn't reveal exports ([817f1da](https://github.com/BHC-IT/stronk-types/commit/817f1da1806a533172ba1d57ca641350a535d769))

# [5.0.0](https://github.com/BHC-IT/stronk-types/compare/v4.0.0...v5.0.0) (2023-06-04)


### Code Refactoring

* **Object:** Rename Object to ObjectUtils ([b36e112](https://github.com/BHC-IT/stronk-types/commit/b36e112d91066b80220b7f553e54332b377d0272))
* **Object:** Rename RequireOne to SemiPartial ([e9de506](https://github.com/BHC-IT/stronk-types/commit/e9de5060cf50307ecdfa4a1efe361dd35a81ea97))


### Features

* **Object:** Add Keys.Required and Keys.Optional ([dcd60a3](https://github.com/BHC-IT/stronk-types/commit/dcd60a3a67b9cc7d124aa3c3c4b0556fadb2f09c))
* **Object:** Add OnlyOptional ([9c8b631](https://github.com/BHC-IT/stronk-types/commit/9c8b631e5775cc002e6b77ca777f1899dfa4c08d))
* **Object:** Add OnlyRequired ([98bf3d2](https://github.com/BHC-IT/stronk-types/commit/98bf3d2e6128e7898dfca0447ec31964ee798f17))
* **Object:** Add RequireOneOptional ([a7709f5](https://github.com/BHC-IT/stronk-types/commit/a7709f5a221b2c858ad02cbdebb906c90d2d2da1))


### BREAKING CHANGES

* **Object:** Object namespace has been renamed to avoid clashing with global interface
* **Object:** RequireOne has been renamed

# [4.0.0](https://github.com/BHC-IT/stronk-types/compare/v3.0.0...v4.0.0) (2023-06-01)


### Bug Fixes

* **Object:** Optional fields break FromEntries ([48ebe41](https://github.com/BHC-IT/stronk-types/commit/48ebe41f014c1f58ec8303a2b1bb86d2fb4dae50))
* **Test/Object:** Missing closing bracket ([a185ca5](https://github.com/BHC-IT/stronk-types/commit/a185ca54e0a1341355e1c20649b0c88c066d4935))


### Code Refactoring

* **Object:** Make PartialRecord parameters mandatory ([9c23a2f](https://github.com/BHC-IT/stronk-types/commit/9c23a2f7b17d8e940d751e813b5e491c27ebb5ba))


### Features

* **Conditionals:** Add IfNot ([8988ca7](https://github.com/BHC-IT/stronk-types/commit/8988ca703dae2b112941ca178c62a4ef63de28c0))
* **Object:** Add RequireOne ([dfeedcc](https://github.com/BHC-IT/stronk-types/commit/dfeedcc87de5127237851aa1b5b639cfc82d72da))
* **Object:** Add support for optional props in Entries and Values ([a4b512d](https://github.com/BHC-IT/stronk-types/commit/a4b512dae3fc834989a8eb686f20d164ae37a332))


### BREAKING CHANGES

* **Object:** PartialRecord parameters are now *required*

# [3.0.0](https://github.com/BHC-IT/stronk-types/compare/v2.1.0...v3.0.0) (2023-06-01)


### Bug Fixes

* **Conditionals:** Extends doesn't respect `extends` keyword behaviour ([530c4ea](https://github.com/BHC-IT/stronk-types/commit/530c4ea802bcb5d13c8f00d7a67764cb96ef6a6a))


### chore

* **Object:** Remove Entry (use Entries instead) ([18c3044](https://github.com/BHC-IT/stronk-types/commit/18c304479ae73be44f4259b39ba5359c1c6953dd))


### Features

* **Conditionals:** Add MutuallyExtend ([831563b](https://github.com/BHC-IT/stronk-types/commit/831563b80472a4f33f36496248566dce040b820f))
* **Object:** Add Entries ([ffc8c1e](https://github.com/BHC-IT/stronk-types/commit/ffc8c1e3aa329813d8837c8b40b3373d5eefbe27))
* **Object:** Add Entries ([cc9df2a](https://github.com/BHC-IT/stronk-types/commit/cc9df2adc28cd7bcb8fcf8a885bf74c0cf0195f7))
* **Object:** Add ObjectEntry and PartialRecord ([34dd411](https://github.com/BHC-IT/stronk-types/commit/34dd411065eb1e9d1511732666286d64ad474364))
* **Object:** Add Values ([bdd7479](https://github.com/BHC-IT/stronk-types/commit/bdd7479ec5605ef7efeefb70ed718091d4252678))


### BREAKING CHANGES

* **Object:** Entry has been removed

# [2.1.0](https://github.com/BHC-IT/stronk-types/compare/v2.0.0...v2.1.0) (2023-05-30)


### Bug Fixes

* **Object:** Missing file (kek) ([0dd6871](https://github.com/BHC-IT/stronk-types/commit/0dd687122cff529d7ddc3525eab5077b3ccdf7b3))


### Features

* **Conditionals:** Add IfAny and IfNotAny ([7ed70b6](https://github.com/BHC-IT/stronk-types/commit/7ed70b6446f3d1a2c4a8a67012506578a4450b38))
* **Conditionals:** Add NotExtends ([841080f](https://github.com/BHC-IT/stronk-types/commit/841080f3d64ddc08207d4eaa946d3e65aa9d08e3))
* **Object:** Add Entry ([5a5237b](https://github.com/BHC-IT/stronk-types/commit/5a5237bfb332d3e78dce81befe69c66b5fb9ab0e))
* **Object:** Add IsKnown ([9fd75ce](https://github.com/BHC-IT/stronk-types/commit/9fd75ce900e2f27013088553bc42620973373e53))
* **Object:** add IsObject ([1c26d65](https://github.com/BHC-IT/stronk-types/commit/1c26d65590b0530cf81c565b98f58e5f37de8473))

# [2.0.0](https://github.com/BHC-IT/stronk-types/compare/v1.3.0...v2.0.0) (2023-05-30)


### Bug Fixes

* Broken Test types ([c017aea](https://github.com/BHC-IT/stronk-types/commit/c017aea322de209479d6428fccbac7fe4b13a922))


### BREAKING CHANGES

* Some Test types got removed, others now work properly

# [1.3.0](https://github.com/BHC-IT/stronk-types/compare/v1.2.0...v1.3.0) (2023-05-30)


### Features

* **Test:** Add ExpectEmpty<T extends Traversable> ([121c21e](https://github.com/BHC-IT/stronk-types/commit/121c21e95b3714fdcda578989a6de5534e893bae))
