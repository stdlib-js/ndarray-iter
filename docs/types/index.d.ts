/*
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

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import nditerColumns = require( '@stdlib/ndarray-iter-columns' );
import nditerEntries = require( '@stdlib/ndarray-iter-entries' );
import nditerIndices = require( '@stdlib/ndarray-iter-indices' );
import nditerRows = require( '@stdlib/ndarray-iter-rows' );
import nditer2arrayEach = require( '@stdlib/ndarray-iter-to-array-each' );
import nditerValues = require( '@stdlib/ndarray-iter-values' );

/**
* Interface describing the `iter` namespace.
*/
interface Namespace {
	/**
	* Returns an iterator which iterates over each column in a matrix (or stack of matrices).
	*
	* @param x - input value
	* @param options - function options
	* @param options.readonly - boolean indicating whether returned views should be read-only
	* @returns iterator
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	* var ndarray2array = require( `@stdlib/ndarray/to-array` );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerColumns( x );
	*
	* var v = iter.next().value;
	* // returns <ndarray>
	*
	* var arr = ndarray2array( v );
	* // returns [ 1, 3 ]
	*
	* v = iter.next().value;
	* // returns <ndarray>
	*
	* arr = ndarray2array( v );
	* // returns [ 2, 4 ]
	*
	* v = iter.next().value;
	* // returns <ndarray>
	*
	* arr = ndarray2array( v );
	* // returns [ 5, 7 ]
	*
	* // ...
	*/
	nditerColumns: typeof nditerColumns;

	/**
	* Returns an iterator which returns `[index, value]` pairs for each element in a provided ndarray.
	*
	* ## Notes
	*
	* -   Each returned index is a Cartesian index (i.e., an array of subscripts/dimension indices).
	*
	* @param x - input array
	* @param options - function options
	* @param options.order - index iteration order
	* @returns iterator
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerEntries( x );
	*
	* var v = iter.next().value;
	* // returns [ [ 0, 0, 0 ], 1 ]
	*
	* v = iter.next().value;
	* // returns [ [ 0, 0, 1 ], 2 ]
	*
	* v = iter.next().value;
	* // returns [ [ 0, 1, 0 ], 3 ]
	*
	* // ...
	*/
	nditerEntries: typeof nditerEntries;

	/**
	* Returns an iterator which returns indices for use indexing into an ndarray having a specified shape.
	*
	* @param shape - input shape
	* @param options - function options
	* @param options.order - index iteration order
	* @returns iterator
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerIndices( x.shape );
	*
	* var v = iter.next().value;
	* // returns [ 0, 0, 0 ]
	*
	* v = iter.next().value;
	* // returns [ 0, 0, 1 ]
	*
	* v = iter.next().value;
	* // returns [ 0, 1, 0 ]
	*
	* // ...
	*/
	nditerIndices: typeof nditerIndices;

	/**
	* Returns an iterator which iterates over each row in a matrix (or stack of matrices).
	*
	* @param x - input value
	* @param options - function options
	* @param options.readonly - boolean indicating whether returned views should be read-only
	* @returns iterator
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	* var ndarray2array = require( `@stdlib/ndarray/to-array` );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerRows( x );
	*
	* var v = iter.next().value;
	* // returns <ndarray>
	*
	* var arr = ndarray2array( v );
	* // returns [ 1, 2 ]
	*
	* v = iter.next().value;
	* // returns <ndarray>
	*
	* arr = ndarray2array( v );
	* // returns [ 3, 4 ]
	*
	* v = iter.next().value;
	* // returns <ndarray>
	*
	* arr = ndarray2array( v );
	* // returns [ 5, 6 ]
	*
	* // ...
	*/
	nditerRows: typeof nditerRows;

	/**
	* Returns an iterator which converts each iterated ndarray to a generic array.
	*
	* ## Notes
	*
	* -   If an environment supports `Symbol.iterator` and a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @returns iterator
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	* var ndarray2array = require( `@stdlib/ndarray/to-array` );
	* var nditerRows = require( `@stdlib/ndarray/iter/rows` );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
	* // returns <ndarray>
	*
	* var iter = ns.nditer2arrayEach( nditerRows( x ) );
	*
	* var v = iter.next().value;
	* // returns [ 1, 2 ]
	*
	* v = iter.next().value;
	* // returns [ 3, 4 ]
	*
	* v = iter.next().value;
	* // returns [ 5, 6 ]
	*
	* // ...
	*/
	nditer2arrayEach: typeof nditer2arrayEach;

	/**
	* Returns an iterator which returns individual elements of a provided ndarray.
	*
	* @param x - input array
	* @param options - function options
	* @param options.order - index iteration order
	* @returns iterator
	*
	* @example
	* var array = require( `@stdlib/ndarray/array` );
	*
	* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
	*     'dtype': 'float64'
	* });
	* // returns <ndarray>
	*
	* var iter = ns.nditerValues( x );
	*
	* var v = iter.next().value;
	* // returns 1
	*
	* v = iter.next().value;
	* // returns 2
	*
	* v = iter.next().value;
	* // returns 3
	*
	* // ...
	*/
	nditerValues: typeof nditerValues;
}

/**
* Multidimensional array iterators.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;