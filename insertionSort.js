//Sorting and searching algorithms

/*

1. Start with the second element (index 1) of the array.
2. Iterate through the array from index 1 to n-1, where n is the length of the array.
    - Set the current element as the "currentElement".
    - Set a pointer "j" to the previous index (i-1) of the current element.
    - While j >= 0 and the element at index j is greater than the currentElement:
        - Shift the element at index j one position to the right (arr[j+1] = arr[j]).
        - Decrement j by 1.
    - Place the currentElement at index j+1 (arr[j+1] = currentElement).
3. Repeat step 2 until the end of the iteration.
4. The array is now sorted in ascending order.

*/


//javascript implementation

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    // Set the current element as the "currentElement".
    const currentElement = arr[i];
    // Set a pointer "j" to the previous index (i-1) of the current element.
    let j = i - 1;
    // While j >= 0 and the element at index j is greater than the currentElement:
    while (j >= 0 && arr[j] > currentElement) {
      // Shift the element at index j one position to the right (arr[j+1] = arr[j]).
      arr[j + 1] = arr[j];
      // Decrement j by 1.
      j--;
    }
    // Place the currentElement at index j+1 (arr[j+1] = currentElement).
    arr[j + 1] = currentElement;
  }
}

// Example usage:
const array = [5, 2, 8, 12, 1, 6];
insertionSort(array);
console.log(array); // Output: [1, 2, 5, 6, 8, 12]
