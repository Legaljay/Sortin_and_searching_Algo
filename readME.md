## Insertion Sort

Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It works by iteratively partitioning the array into a sorted and an unsorted region, and efficiently inserting each element from the unsorted region into its correct position in the sorted region.

### Algorithm

The algorithm follows these steps:

1. Start with the second element (index 1) of the array. The first element (index 0) is considered as a sorted sequence of length 1.

2. Iterate through the array from index 1 to the last element (index n-1), where n is the length of the array.

3. For each iteration:
   - Store the current element in a temporary variable. This element will be inserted into the sorted sequence.
   - Set a pointer to the previous index of the current element.

4. Compare the current element with the elements in the sorted sequence:
   - While the pointer is greater than or equal to 0 and the element at the pointer position is greater than the current element:
     - Shift the element at the pointer position one position to the right (move arr[j] to arr[j+1]).
     - Decrement the pointer by 1.

5. Insert the current element at the position pointer+1 (place the current element in arr[pointer+1]).

6. Repeat steps 3 to 5 until the end of the iteration.

7. The array is now sorted in ascending order.

### Complexity Analysis

The time complexity of the Insertion Sort algorithm is O(n^2) in the worst and average cases. This is because for each element, it potentially requires comparing and shifting all the preceding elements in the sorted region.

However, in the best case scenario when the input array is already sorted, the algorithm has a time complexity of O(n) since no shifting is required.

The space complexity of Insertion Sort is O(1) since the sorting is performed in-place, without requiring any additional data structures.

### Usage

To use the Insertion Sort algorithm in your JavaScript code, you can follow these steps:

1. Define or obtain an array of elements to be sorted.

2. Call the `insertionSort` function, passing the array as a parameter.

3. The function will sort the array in-place, modifying its original order.

4. Access the sorted array and perform any further operations as needed.

By using the Insertion Sort algorithm, you can efficiently sort arrays of any size, making it a useful tool for various sorting applications.