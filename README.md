<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Iterators

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multidimensional array iterators.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-iter@esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { nditer2arrayEach, nditerColumnEntries, nditerColumns, nditerEntries, nditerIndices, nditerInterleaveSubarrays, nditerMatrices, nditerMatrixEntries, nditerRowEntries, nditerRows, nditerSelectDimension, nditerStacks, nditerSubarrays, nditerValues } from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-iter@esm/index.mjs';
```

#### ns

Namespace containing utilities for iterating over multidimensional arrays.

```javascript
var o = ns;
// returns {...}
```

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`nditerColumnEntries( x[, options] )`][@stdlib/ndarray/iter/column-entries]</span><span class="delimiter">: </span><span class="description">create an iterator which returns `[index, column]` pairs for each column in a matrix (or stack of matrices).</span>
-   <span class="signature">[`nditerColumns( x[, options] )`][@stdlib/ndarray/iter/columns]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each column in a matrix (or stack of matrices).</span>
-   <span class="signature">[`nditerEntries( x[, options] )`][@stdlib/ndarray/iter/entries]</span><span class="delimiter">: </span><span class="description">create an iterator which returns `[index, value]` pairs for each element in a provided `ndarray`.</span>
-   <span class="signature">[`nditerIndices( shape[, options] )`][@stdlib/ndarray/iter/indices]</span><span class="delimiter">: </span><span class="description">create an iterator which returns indices for use indexing into an `ndarray` having a specified shape.</span>
-   <span class="signature">[`nditerInterleaveSubarrays( arr, ndims )`][@stdlib/ndarray/iter/interleave-subarrays]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over interleaved subarrays.</span>
-   <span class="signature">[`nditerMatrices( x[, options] )`][@stdlib/ndarray/iter/matrices]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each matrix in a stack of matrices.</span>
-   <span class="signature">[`nditerMatrixEntries( x[, options] )`][@stdlib/ndarray/iter/matrix-entries]</span><span class="delimiter">: </span><span class="description">create an iterator which returns `[index, matrix]` pairs for each matrix in a stack of matrices.</span>
-   <span class="signature">[`nditerRowEntries( x[, options] )`][@stdlib/ndarray/iter/row-entries]</span><span class="delimiter">: </span><span class="description">create an iterator which returns `[index, row]` pairs for each row in a matrix (or stack of matrices).</span>
-   <span class="signature">[`nditerRows( x[, options] )`][@stdlib/ndarray/iter/rows]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each row in a matrix (or stack of matrices).</span>
-   <span class="signature">[`nditerSelectDimension( x, dim[, options] )`][@stdlib/ndarray/iter/select-dimension]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each view along a specified dimension.</span>
-   <span class="signature">[`nditerStacks( x, dims[, options] )`][@stdlib/ndarray/iter/stacks]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each subarray in a stack of subarrays according to a list of specified stack dimensions.</span>
-   <span class="signature">[`nditerSubarrays( x, ndims[, options] )`][@stdlib/ndarray/iter/subarrays]</span><span class="delimiter">: </span><span class="description">create an iterator which iterates over each subarray in a stack of subarrays.</span>
-   <span class="signature">[`nditer2arrayEach( iterator )`][@stdlib/ndarray/iter/to-array-each]</span><span class="delimiter">: </span><span class="description">create an iterator which converts each iterated `ndarray` to a generic array.</span>
-   <span class="signature">[`nditerValues( x[, options] )`][@stdlib/ndarray/iter/values]</span><span class="delimiter">: </span><span class="description">create an iterator which returns individual elements from a provided `ndarray`.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-iter@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-iter.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-iter

[test-image]: https://github.com/stdlib-js/ndarray-iter/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-iter/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-iter/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-iter?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-iter.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-iter/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-iter/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-iter/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-iter/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-iter/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-iter/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-iter/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-iter/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-iter/main/LICENSE

<!-- <toc-links> -->

[@stdlib/ndarray/iter/column-entries]: https://github.com/stdlib-js/ndarray-iter-column-entries/tree/esm

[@stdlib/ndarray/iter/columns]: https://github.com/stdlib-js/ndarray-iter-columns/tree/esm

[@stdlib/ndarray/iter/entries]: https://github.com/stdlib-js/ndarray-iter-entries/tree/esm

[@stdlib/ndarray/iter/indices]: https://github.com/stdlib-js/ndarray-iter-indices/tree/esm

[@stdlib/ndarray/iter/interleave-subarrays]: https://github.com/stdlib-js/ndarray-iter-interleave-subarrays/tree/esm

[@stdlib/ndarray/iter/matrices]: https://github.com/stdlib-js/ndarray-iter-matrices/tree/esm

[@stdlib/ndarray/iter/matrix-entries]: https://github.com/stdlib-js/ndarray-iter-matrix-entries/tree/esm

[@stdlib/ndarray/iter/row-entries]: https://github.com/stdlib-js/ndarray-iter-row-entries/tree/esm

[@stdlib/ndarray/iter/rows]: https://github.com/stdlib-js/ndarray-iter-rows/tree/esm

[@stdlib/ndarray/iter/select-dimension]: https://github.com/stdlib-js/ndarray-iter-select-dimension/tree/esm

[@stdlib/ndarray/iter/stacks]: https://github.com/stdlib-js/ndarray-iter-stacks/tree/esm

[@stdlib/ndarray/iter/subarrays]: https://github.com/stdlib-js/ndarray-iter-subarrays/tree/esm

[@stdlib/ndarray/iter/to-array-each]: https://github.com/stdlib-js/ndarray-iter-to-array-each/tree/esm

[@stdlib/ndarray/iter/values]: https://github.com/stdlib-js/ndarray-iter-values/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
