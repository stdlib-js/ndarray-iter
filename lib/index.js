/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name nditerColumnEntries
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/column-entries}
*/
setReadOnly( ns, 'nditerColumnEntries', require( '@stdlib/ndarray-iter-column-entries' ) );

/**
* @name nditerColumns
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/columns}
*/
setReadOnly( ns, 'nditerColumns', require( '@stdlib/ndarray-iter-columns' ) );

/**
* @name nditerEntries
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/entries}
*/
setReadOnly( ns, 'nditerEntries', require( '@stdlib/ndarray-iter-entries' ) );

/**
* @name nditerIndices
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/indices}
*/
setReadOnly( ns, 'nditerIndices', require( '@stdlib/ndarray-iter-indices' ) );

/**
* @name nditerInterleaveSubarrays
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/interleave-subarrays}
*/
setReadOnly( ns, 'nditerInterleaveSubarrays', require( '@stdlib/ndarray-iter-interleave-subarrays' ) );

/**
* @name nditerMatrices
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/matrices}
*/
setReadOnly( ns, 'nditerMatrices', require( '@stdlib/ndarray-iter-matrices' ) );

/**
* @name nditerMatrixEntries
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/matrix-entries}
*/
setReadOnly( ns, 'nditerMatrixEntries', require( '@stdlib/ndarray-iter-matrix-entries' ) );

/**
* @name nditerRowEntries
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/row-entries}
*/
setReadOnly( ns, 'nditerRowEntries', require( '@stdlib/ndarray-iter-row-entries' ) );

/**
* @name nditerRows
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/rows}
*/
setReadOnly( ns, 'nditerRows', require( '@stdlib/ndarray-iter-rows' ) );

/**
* @name nditerSelectDimension
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/select-dimension}
*/
setReadOnly( ns, 'nditerSelectDimension', require( '@stdlib/ndarray-iter-select-dimension' ) );

/**
* @name nditerStacks
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/stacks}
*/
setReadOnly( ns, 'nditerStacks', require( '@stdlib/ndarray-iter-stacks' ) );

/**
* @name nditerSubarrays
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/subarrays}
*/
setReadOnly( ns, 'nditerSubarrays', require( '@stdlib/ndarray-iter-subarrays' ) );

/**
* @name nditer2arrayEach
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/to-array-each}
*/
setReadOnly( ns, 'nditer2arrayEach', require( '@stdlib/ndarray-iter-to-array-each' ) );

/**
* @name nditerValues
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/ndarray/iter/values}
*/
setReadOnly( ns, 'nditerValues', require( '@stdlib/ndarray-iter-values' ) );


// EXPORTS //

module.exports = ns;
