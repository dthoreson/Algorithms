/* 
Given two arrays, interleave them into one new array.
The arrays may be different lengths. The extra items should be added to the
back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    var newArr = [];
    var len = Math.max(arr1.length, arr2.length);

    for (var i = 0; i < len; i++) {
        if (i < arr1.length) {
            newArr.push(arr1[i]);
        }
        if (i < arr2.length) {
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}


// ALTERNATIVE WAY TO DO THIS SAME PROBLEM BY ESSENTIALLY APPENDING REMAINDER TO NEW ARRAY
// function interleaveArrays(arr1, arr2) {
//     const result = [];
//     const minLength = Math.min(arr1.length, arr2.length);
//     for (let i = 0; i < minLength; i++) {
//         result.push(arr1[i], arr2[i]);
//     }
//     // append the remaining elements from the longer array, if any
//     if (arr1.length > arr2.length) {
//         result.push(...arr1.slice(minLength));
//     } else if (arr2.length > arr1.length) {
//         result.push(...arr2.slice(minLength));
//     }
//     console.log(result)
//     return result;
// }




console.log(interleaveArrays(arrA1, arrB1))
console.log(interleaveArrays(arrA2, arrB2))
console.log(interleaveArrays(arrA3, arrB3))
console.log(interleaveArrays(arrA4, arrB4))
/*****************************************************************************/