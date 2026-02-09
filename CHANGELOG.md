# CHANGELOG

> Package changelog.

<section class="release" id="v0.3.1">

## 0.3.1 (2026-02-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2026-01-31)

<section class="features">

### Features

-   [`3590e0f`](https://github.com/stdlib-js/stdlib/commit/3590e0f954650d8129ca31cd2cbf3c6c3cfc097f) - update `ndarray/iter` TypeScript declarations
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)
-   [`6576f4f`](https://github.com/stdlib-js/stdlib/commit/6576f4f82a2f47b2c0ffa35731efcb15a22e158a) - add `nditerInterleaveSubarrays`
-   [`25e87e4`](https://github.com/stdlib-js/stdlib/commit/25e87e46c052b2fb2bbd026a71a5ee10f4c50d3f) - add `ndarray/iter/interleave-subarrays`
-   [`4289f78`](https://github.com/stdlib-js/stdlib/commit/4289f78da1d67c5671151413b4673ec32ede26c2) - add `nditerStacks` to namespace
-   [`d256bd9`](https://github.com/stdlib-js/stdlib/commit/d256bd93e03a245d45b732ba4d8ab60e47d378d6) - add `ndarray/iter/stacks`
-   [`873b085`](https://github.com/stdlib-js/stdlib/commit/873b085ae0183426f3e8e831a50a42e2df3ba13d) - add `nditerSubarrays` to namespace
-   [`fd9a5c2`](https://github.com/stdlib-js/stdlib/commit/fd9a5c2e29508ab5b393e2273ddb7463be6affb3) - add `ndarray/iter/subarrays`
-   [`46aec25`](https://github.com/stdlib-js/stdlib/commit/46aec25aac5d4a0c8a3fd7b719dd6a080e59beb8) - add `nditerSelectDimension` to namespace
-   [`6dce19b`](https://github.com/stdlib-js/stdlib/commit/6dce19b2a2dfae6159257dab0c52a8421e0861d2) - add `ndarray/iter/select-dimension`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`e4dd1ed`](https://github.com/stdlib-js/stdlib/commit/e4dd1ed8bf809ec7c8c34fd8c5dae03f5ed7cdf3) - use correct name in package.json
-   [`a299630`](https://github.com/stdlib-js/stdlib/commit/a299630d08a49ba51c6e3501fbd7d215338ca23a) - avoid potential external mutation
-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - remove unused imports from TS declaration file

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`3590e0f`](https://github.com/stdlib-js/stdlib/commit/3590e0f954650d8129ca31cd2cbf3c6c3cfc097f) - **feat:** update `ndarray/iter` TypeScript declarations _(by Philipp Burckhardt)_
-   [`5feedbc`](https://github.com/stdlib-js/stdlib/commit/5feedbcf7d1de8ab6259c96fa39a2fdc50e2c895) - **docs:** do not pass in options object to avoid cast error _(by Philipp Burckhardt)_
-   [`8a6dbd7`](https://github.com/stdlib-js/stdlib/commit/8a6dbd7bf692bcd9ce166a7370eda0a7410da3b0) - **docs:** fix example code and return annotation values _(by Philipp Burckhardt)_
-   [`07f7c05`](https://github.com/stdlib-js/stdlib/commit/07f7c0522c73e6ad9505e1d45035ae439344200d) - **test:** use standardized assertion messages and fix lint errors _(by Philipp Burckhardt)_
-   [`c894b66`](https://github.com/stdlib-js/stdlib/commit/c894b664661bfb87286304b24dd5a1758ae482b7) - **test:** use .strictEqual() instead of .equal() and fix lint errors _(by Philipp Burckhardt)_
-   [`e4dd1ed`](https://github.com/stdlib-js/stdlib/commit/e4dd1ed8bf809ec7c8c34fd8c5dae03f5ed7cdf3) - **fix:** use correct name in package.json _(by Philipp Burckhardt)_
-   [`25f29f8`](https://github.com/stdlib-js/stdlib/commit/25f29f85b888fd71646902ad9cda4f5f6aa62eff) - **refactor:** use base assertion utility _(by Athan Reines)_
-   [`f231799`](https://github.com/stdlib-js/stdlib/commit/f231799e1d40cfff7ceb79a6074166a08c4ba072) - **docs:** update related packages sections [(#4545)](https://github.com/stdlib-js/stdlib/pull/4545) _(by stdlib-bot)_
-   [`2764a32`](https://github.com/stdlib-js/stdlib/commit/2764a32b5942d2aff2d0fe8cfcb2cd6b9c184633) - **docs:** fix grammar _(by Athan Reines)_
-   [`2825b42`](https://github.com/stdlib-js/stdlib/commit/2825b42e8cd7483d15dfed1c6b389bfcb86d7ca0) - **docs:** update related packages sections [(#3898)](https://github.com/stdlib-js/stdlib/pull/3898) _(by stdlib-bot)_
-   [`a299630`](https://github.com/stdlib-js/stdlib/commit/a299630d08a49ba51c6e3501fbd7d215338ca23a) - **fix:** avoid potential external mutation _(by Athan Reines)_
-   [`cf7d38a`](https://github.com/stdlib-js/stdlib/commit/cf7d38ae3e7bce92cf47778f7b1c3da731121d77) - **docs:** update related packages sections [(#3527)](https://github.com/stdlib-js/stdlib/pull/3527) _(by stdlib-bot)_
-   [`bf5643f`](https://github.com/stdlib-js/stdlib/commit/bf5643fb1a3f32a60903d8e210f71571e609119f) - **docs:** update related packages sections [(#3404)](https://github.com/stdlib-js/stdlib/pull/3404) _(by stdlib-bot)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_
-   [`7f368f6`](https://github.com/stdlib-js/stdlib/commit/7f368f6c3f4cea444a304a62616cea36a5f143eb) - **fix:** remove unused imports from TS declaration file _(by Philipp Burckhardt)_
-   [`37ef5f4`](https://github.com/stdlib-js/stdlib/commit/37ef5f4f43d4fe03643b693a40b166420cbb07fd) - **refactor:** use dedicated array utility _(by Athan Reines)_
-   [`df3ed1e`](https://github.com/stdlib-js/stdlib/commit/df3ed1ee7fdc62c9f49bfa38eb1df240fb752a6e) - **docs:** update namespace ToCs _(by Athan Reines)_
-   [`6576f4f`](https://github.com/stdlib-js/stdlib/commit/6576f4f82a2f47b2c0ffa35731efcb15a22e158a) - **feat:** add `nditerInterleaveSubarrays` _(by Athan Reines)_
-   [`25e87e4`](https://github.com/stdlib-js/stdlib/commit/25e87e46c052b2fb2bbd026a71a5ee10f4c50d3f) - **feat:** add `ndarray/iter/interleave-subarrays` _(by Athan Reines)_
-   [`4289f78`](https://github.com/stdlib-js/stdlib/commit/4289f78da1d67c5671151413b4673ec32ede26c2) - **feat:** add `nditerStacks` to namespace _(by Athan Reines)_
-   [`d256bd9`](https://github.com/stdlib-js/stdlib/commit/d256bd93e03a245d45b732ba4d8ab60e47d378d6) - **feat:** add `ndarray/iter/stacks` _(by Athan Reines)_
-   [`7a4424b`](https://github.com/stdlib-js/stdlib/commit/7a4424bd81e212e9c7534520213b696c0c64c644) - **docs:** fix comment _(by Athan Reines)_
-   [`873b085`](https://github.com/stdlib-js/stdlib/commit/873b085ae0183426f3e8e831a50a42e2df3ba13d) - **feat:** add `nditerSubarrays` to namespace _(by Athan Reines)_
-   [`fd9a5c2`](https://github.com/stdlib-js/stdlib/commit/fd9a5c2e29508ab5b393e2273ddb7463be6affb3) - **feat:** add `ndarray/iter/subarrays` _(by Athan Reines)_
-   [`46aec25`](https://github.com/stdlib-js/stdlib/commit/46aec25aac5d4a0c8a3fd7b719dd6a080e59beb8) - **feat:** add `nditerSelectDimension` to namespace _(by Athan Reines)_
-   [`6dce19b`](https://github.com/stdlib-js/stdlib/commit/6dce19b2a2dfae6159257dab0c52a8421e0861d2) - **feat:** add `ndarray/iter/select-dimension` _(by Athan Reines)_
-   [`4ec7a03`](https://github.com/stdlib-js/stdlib/commit/4ec7a031214836b442e5bce57b57b20e166ef8a4) - **refactor:** improve type specificity _(by Athan Reines)_
-   [`0fef28c`](https://github.com/stdlib-js/stdlib/commit/0fef28ccec002134fb0ebd2db1a713404ab1db17) - **refactor:** improve type specificity _(by Athan Reines)_
-   [`9a4b430`](https://github.com/stdlib-js/stdlib/commit/9a4b430c6013d48480cb73a266fabd9683f49b31) - **refactor:** improve type specificity _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-15)

<section class="features">

### Features

-   [`d9952f2`](https://github.com/stdlib-js/stdlib/commit/d9952f2a25042570dfe5b20a2dacc4a07cec81c4) - update namespace TypeScript declarations [(#1128)](https://github.com/stdlib-js/stdlib/pull/1128)
-   [`b01d709`](https://github.com/stdlib-js/stdlib/commit/b01d7098eca0cb303d820723d45e8c3e9828a944) - add `nditerMatrixEntries` to namespace
-   [`5f80a15`](https://github.com/stdlib-js/stdlib/commit/5f80a15dcb950ca672331f0fc276b10bc7c06105) - add `ndarray/iter/matrix-entries`
-   [`7685072`](https://github.com/stdlib-js/stdlib/commit/7685072aff78337a4ba796cb1ac4a6f5eb9d6a4d) - add `nditerColumnEntries` to namespace
-   [`aeccc0d`](https://github.com/stdlib-js/stdlib/commit/aeccc0da93a0cd2ad37e8e8bb69494e8453b068e) - add `ndarray/iter/column-entries`
-   [`b96a9a2`](https://github.com/stdlib-js/stdlib/commit/b96a9a24e8028d366f5435b793cd285a3565e008) - add `nditerRowEntries` to namespace
-   [`344aa9e`](https://github.com/stdlib-js/stdlib/commit/344aa9e386486ee8b5af3edd2bd788db19f338e1) - add `ndarray/iter/row-entries`
-   [`29d99d7`](https://github.com/stdlib-js/stdlib/commit/29d99d75414e9559ce2938cc19e4bc13af1d4968) - add `nditerMatrices` to namespace
-   [`88a673c`](https://github.com/stdlib-js/stdlib/commit/88a673c7ed8f97ab14df8f26c60211f634994108) - add `ndarray/iter/matrices`
-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122)

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`e8cf70a`](https://github.com/stdlib-js/stdlib/commit/e8cf70aa37d29998ec2b4c31f21e41c0ac8c4006) - **docs:** update related packages sections [(#1263)](https://github.com/stdlib-js/stdlib/pull/1263) _(by stdlib-bot)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`78a556e`](https://github.com/stdlib-js/stdlib/commit/78a556efa2f1da29eb9081d393f5768ad1518117) - **docs:** update related packages sections [(#1145)](https://github.com/stdlib-js/stdlib/pull/1145) _(by stdlib-bot)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`de93ae0`](https://github.com/stdlib-js/stdlib/commit/de93ae01f1d5e234696e02b9e778d3d71515f5b7) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`d9952f2`](https://github.com/stdlib-js/stdlib/commit/d9952f2a25042570dfe5b20a2dacc4a07cec81c4) - **feat:** update namespace TypeScript declarations [(#1128)](https://github.com/stdlib-js/stdlib/pull/1128) _(by stdlib-bot, Athan Reines)_
-   [`2ee04a1`](https://github.com/stdlib-js/stdlib/commit/2ee04a1a56367b9663698aa0d01c10dca8d716df) - **docs:** update namespace ToCs _(by Athan Reines)_
-   [`6c6d8bd`](https://github.com/stdlib-js/stdlib/commit/6c6d8bdd9de3d0b1e0c2cdaa56d677166b5434bd) - **docs:** update links _(by Athan Reines)_
-   [`18d7b79`](https://github.com/stdlib-js/stdlib/commit/18d7b79b109b7a144bc343d528b6aec1cbd38bd9) - **docs:** fix comment _(by Athan Reines)_
-   [`f74d56a`](https://github.com/stdlib-js/stdlib/commit/f74d56a193844b0173a5b5b8eae406f927e53b23) - **docs:** fix comment _(by Athan Reines)_
-   [`471e925`](https://github.com/stdlib-js/stdlib/commit/471e9257d5ca06d13a3c9faf7594d96870deeff0) - **docs:** fix comment _(by Athan Reines)_
-   [`52556c3`](https://github.com/stdlib-js/stdlib/commit/52556c32f126881ddcd1aaf8b1b0baf85ac78e59) - **docs:** fix examples _(by Athan Reines)_
-   [`ec6d1ed`](https://github.com/stdlib-js/stdlib/commit/ec6d1edc85b345d8bd0a4034d2bc2b0c6445d155) - **docs:** fix error description _(by Athan Reines)_
-   [`b01d709`](https://github.com/stdlib-js/stdlib/commit/b01d7098eca0cb303d820723d45e8c3e9828a944) - **feat:** add `nditerMatrixEntries` to namespace _(by Athan Reines)_
-   [`5f80a15`](https://github.com/stdlib-js/stdlib/commit/5f80a15dcb950ca672331f0fc276b10bc7c06105) - **feat:** add `ndarray/iter/matrix-entries` _(by Athan Reines)_
-   [`7685072`](https://github.com/stdlib-js/stdlib/commit/7685072aff78337a4ba796cb1ac4a6f5eb9d6a4d) - **feat:** add `nditerColumnEntries` to namespace _(by Athan Reines)_
-   [`aeccc0d`](https://github.com/stdlib-js/stdlib/commit/aeccc0da93a0cd2ad37e8e8bb69494e8453b068e) - **feat:** add `ndarray/iter/column-entries` _(by Athan Reines)_
-   [`ba9ef60`](https://github.com/stdlib-js/stdlib/commit/ba9ef60faebdc0d38428e2d487e71d0324538985) - **docs:** fix grammar typo _(by Athan Reines)_
-   [`5ab2e80`](https://github.com/stdlib-js/stdlib/commit/5ab2e80c8cbc08556636e42eeca94340dcb77ca4) - **docs:** update comments _(by Athan Reines)_
-   [`dc1e33f`](https://github.com/stdlib-js/stdlib/commit/dc1e33f6720ea3f7714f4b76c60a777efd650645) - **docs:** update returns annotation _(by Athan Reines)_
-   [`b96a9a2`](https://github.com/stdlib-js/stdlib/commit/b96a9a24e8028d366f5435b793cd285a3565e008) - **feat:** add `nditerRowEntries` to namespace _(by Athan Reines)_
-   [`344aa9e`](https://github.com/stdlib-js/stdlib/commit/344aa9e386486ee8b5af3edd2bd788db19f338e1) - **feat:** add `ndarray/iter/row-entries` _(by Athan Reines)_
-   [`29d99d7`](https://github.com/stdlib-js/stdlib/commit/29d99d75414e9559ce2938cc19e4bc13af1d4968) - **feat:** add `nditerMatrices` to namespace _(by Athan Reines)_
-   [`88a673c`](https://github.com/stdlib-js/stdlib/commit/88a673c7ed8f97ab14df8f26c60211f634994108) - **feat:** add `ndarray/iter/matrices` _(by Athan Reines)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - **feat:** update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122) _(by stdlib-bot, Athan Reines)_
-   [`a17f2aa`](https://github.com/stdlib-js/stdlib/commit/a17f2aaed3f2449944d5c5d348e9550087ff7a87) - **docs:** update namespace table of contents [(#1116)](https://github.com/stdlib-js/stdlib/pull/1116) _(by stdlib-bot, Athan Reines)_
-   [`654cb7e`](https://github.com/stdlib-js/stdlib/commit/654cb7e3f563edb835a1705b4d99c31fcd57d1fa) - **refactor:** use utility to create a MultiSlice from a list of arguments _(by Athan Reines)_
-   [`fe69034`](https://github.com/stdlib-js/stdlib/commit/fe6903497b6f745d27a2cfca5ea290de06e4a5a1) - **refactor:** use utility to create a MultiSlice from a list of arguments _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-10-14)

<section class="features">

### Features

-   [`b45eb8f`](https://github.com/stdlib-js/stdlib/commit/b45eb8f83d224bea7e4bc063535ddb7962964872) - add `nditerValues` to namespace
-   [`3cc2fdb`](https://github.com/stdlib-js/stdlib/commit/3cc2fdb3b4ba4b60fb52139dc3ffbef267ecfeec) - add `ndarray/iter/values`
-   [`665ce24`](https://github.com/stdlib-js/stdlib/commit/665ce24b77631e05ab7f1788c5777e2fc7e7cca0) - add `nditerEntries` to namespace
-   [`6cd1bad`](https://github.com/stdlib-js/stdlib/commit/6cd1badeb9fff42ccb03486ccf7d6c0b53d03350) - add `ndarray/iter/entries`
-   [`5c7312f`](https://github.com/stdlib-js/stdlib/commit/5c7312f1de2a2e5b6c10c4c4e1c76e7cec8d1620) - add `nditerIndices` to namespace
-   [`613fb18`](https://github.com/stdlib-js/stdlib/commit/613fb18c3890649335378f7b235a5f06e96860eb) - add `ndarray/iter/indices`
-   [`474e7e4`](https://github.com/stdlib-js/stdlib/commit/474e7e4fb2a15bfc8e9e719692b94044d25a7365) - add `nditer2arrayEach` to namespace
-   [`19af262`](https://github.com/stdlib-js/stdlib/commit/19af262e0319ea748c0300abfb363fb4561571a6) - add `ndarray/iter/to-array-each`
-   [`9c23309`](https://github.com/stdlib-js/stdlib/commit/9c233099b1cb3304b0158a52e103b01b262fb683) - add `nditerColumns` to namespace
-   [`8aec891`](https://github.com/stdlib-js/stdlib/commit/8aec8914b2435090b1b466bcdd5820b158da94ef) - add `ndarray/iter/columns`
-   [`43b42fe`](https://github.com/stdlib-js/stdlib/commit/43b42fe596c9b01fb19d3dd710ef71dfdc738510) - add `ndarray/iter` namespace
-   [`fda2bf6`](https://github.com/stdlib-js/stdlib/commit/fda2bf6c22937a44b2e17949b437d5bbec08708c) - add `ndarray/iter/rows`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`bc1768e`](https://github.com/stdlib-js/stdlib/commit/bc1768ea93ed7c72ce90dd4ade9b6786603381b8) - prevent creating writable views when an input array is read-only
-   [`64bd3a8`](https://github.com/stdlib-js/stdlib/commit/64bd3a808f060dc2004d130c2cb974b100527e82) - prevent creating writable views when provided a read-only array
-   [`92b814f`](https://github.com/stdlib-js/stdlib/commit/92b814fe9446bc9f31aed4fb151e6f8bf75213da) - update parameter name to match docs
-   [`69e0a71`](https://github.com/stdlib-js/stdlib/commit/69e0a718dd5b79eae03864b276b635754396d9a0) - update parameter name to match docs

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`1d23784`](https://github.com/stdlib-js/stdlib/commit/1d2378420b1e26a0815e458009271e7894809a06) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`199d59c`](https://github.com/stdlib-js/stdlib/commit/199d59c07623b9f003fe6bef18da11a84c30274c) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`3b849ec`](https://github.com/stdlib-js/stdlib/commit/3b849ec1545f4dae310a8350da56a4f42ec04881) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`1bd53fc`](https://github.com/stdlib-js/stdlib/commit/1bd53fcc9394287b8c8dd82abd4ba83266b5aa7f) - **refactor:** use accessor utility _(by Athan Reines)_
-   [`bc1768e`](https://github.com/stdlib-js/stdlib/commit/bc1768ea93ed7c72ce90dd4ade9b6786603381b8) - **fix:** prevent creating writable views when an input array is read-only _(by Athan Reines)_
-   [`64bd3a8`](https://github.com/stdlib-js/stdlib/commit/64bd3a808f060dc2004d130c2cb974b100527e82) - **fix:** prevent creating writable views when provided a read-only array _(by Athan Reines)_
-   [`b45eb8f`](https://github.com/stdlib-js/stdlib/commit/b45eb8f83d224bea7e4bc063535ddb7962964872) - **feat:** add `nditerValues` to namespace _(by Athan Reines)_
-   [`3cc2fdb`](https://github.com/stdlib-js/stdlib/commit/3cc2fdb3b4ba4b60fb52139dc3ffbef267ecfeec) - **feat:** add `ndarray/iter/values` _(by Athan Reines)_
-   [`3fb0d08`](https://github.com/stdlib-js/stdlib/commit/3fb0d0867de3e5e4e201ebda76c202f1651f1d27) - **chore:** add keyword _(by Athan Reines)_
-   [`a2eea70`](https://github.com/stdlib-js/stdlib/commit/a2eea700f6ce9618ac939c493412c262b4c8fd67) - **chore:** add keywords _(by Athan Reines)_
-   [`665ce24`](https://github.com/stdlib-js/stdlib/commit/665ce24b77631e05ab7f1788c5777e2fc7e7cca0) - **feat:** add `nditerEntries` to namespace _(by Athan Reines)_
-   [`6cd1bad`](https://github.com/stdlib-js/stdlib/commit/6cd1badeb9fff42ccb03486ccf7d6c0b53d03350) - **feat:** add `ndarray/iter/entries` _(by Athan Reines)_
-   [`905a042`](https://github.com/stdlib-js/stdlib/commit/905a0427dcde188ab854d94cd313ca7e1e3d5200) - **docs:** fix comment _(by Athan Reines)_
-   [`3d40220`](https://github.com/stdlib-js/stdlib/commit/3d402204446c8f6230cdc699d8f1dc444673aa95) - **refactor:** use base utility to resolve the next Cartesian index _(by Athan Reines)_
-   [`a0a3f9f`](https://github.com/stdlib-js/stdlib/commit/a0a3f9fc1a6d9d5aaa48500c2609b3876d2b7d9a) - **refactor:** use base utility to resolve the next Cartesian index _(by Athan Reines)_
-   [`afdef7b`](https://github.com/stdlib-js/stdlib/commit/afdef7b5b4b2666a95a20395fef83e6871a08c19) - **refactor:** only import specific method _(by Athan Reines)_
-   [`a4c5a86`](https://github.com/stdlib-js/stdlib/commit/a4c5a866e87e35336b13bb73b6b1a53d44f759df) - **refactor:** use base package to resolve the next Cartesian index _(by Athan Reines)_
-   [`5c7312f`](https://github.com/stdlib-js/stdlib/commit/5c7312f1de2a2e5b6c10c4c4e1c76e7cec8d1620) - **feat:** add `nditerIndices` to namespace _(by Athan Reines)_
-   [`613fb18`](https://github.com/stdlib-js/stdlib/commit/613fb18c3890649335378f7b235a5f06e96860eb) - **feat:** add `ndarray/iter/indices` _(by Athan Reines)_
-   [`92b814f`](https://github.com/stdlib-js/stdlib/commit/92b814fe9446bc9f31aed4fb151e6f8bf75213da) - **fix:** update parameter name to match docs _(by Athan Reines)_
-   [`69e0a71`](https://github.com/stdlib-js/stdlib/commit/69e0a718dd5b79eae03864b276b635754396d9a0) - **fix:** update parameter name to match docs _(by Athan Reines)_
-   [`474e7e4`](https://github.com/stdlib-js/stdlib/commit/474e7e4fb2a15bfc8e9e719692b94044d25a7365) - **feat:** add `nditer2arrayEach` to namespace _(by Athan Reines)_
-   [`19af262`](https://github.com/stdlib-js/stdlib/commit/19af262e0319ea748c0300abfb363fb4561571a6) - **feat:** add `ndarray/iter/to-array-each` _(by Athan Reines)_
-   [`f53e8ef`](https://github.com/stdlib-js/stdlib/commit/f53e8ef9359ccc083045bd01b3c8929c4d138900) - **docs:** add links _(by Athan Reines)_
-   [`d8f8bb2`](https://github.com/stdlib-js/stdlib/commit/d8f8bb2738494c148a9f297dfcf2d6d57e787c66) - **docs:** add links _(by Athan Reines)_
-   [`253a22d`](https://github.com/stdlib-js/stdlib/commit/253a22d97052f4e3cfd1ad02f18b557954a6d7d6) - **docs:** fix imports _(by Athan Reines)_
-   [`f7149ad`](https://github.com/stdlib-js/stdlib/commit/f7149adfb43b24909d710e92ece0bc8f6c4ab2e2) - **docs:** fix imports _(by Athan Reines)_
-   [`9c23309`](https://github.com/stdlib-js/stdlib/commit/9c233099b1cb3304b0158a52e103b01b262fb683) - **feat:** add `nditerColumns` to namespace _(by Athan Reines)_
-   [`8aec891`](https://github.com/stdlib-js/stdlib/commit/8aec8914b2435090b1b466bcdd5820b158da94ef) - **feat:** add `ndarray/iter/columns` _(by Athan Reines)_
-   [`43b42fe`](https://github.com/stdlib-js/stdlib/commit/43b42fe596c9b01fb19d3dd710ef71dfdc738510) - **feat:** add `ndarray/iter` namespace _(by Athan Reines)_
-   [`fda2bf6`](https://github.com/stdlib-js/stdlib/commit/fda2bf6c22937a44b2e17949b437d5bbec08708c) - **feat:** add `ndarray/iter/rows` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

