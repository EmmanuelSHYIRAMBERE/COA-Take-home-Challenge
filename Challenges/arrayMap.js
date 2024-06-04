/**
 * Checks if a contiguous subarray within the given array 'arr' adds up to the target sum 'target'
 *
 * @param {number[]} arr - An array of integers.
 * @param {number} target - The target sum to be found in a contiguous subarray.
 * @returns {boolean} - True if a subarray exists that sums up to the target, False otherwise.
 */
function hasContiguousSum(arr, target) {
  // Initialize variables to track the current sum and the starting index of the subarray
  let currentSum = 0;
  let left = 0;

  // Loop through the entire array
  for (let right = 0; right < arr.length; right++) {
    // Add the current element to the running total
    currentSum += arr[right];

    // This loop keeps shrinking the window from the left side as long as the currentSum is greater than the target
    while (currentSum > target) {
      // Subtract the leftmost element from the current sum
      currentSum -= arr[left];

      // Move the left pointer one position to the right, effectively shrinking the window
      left++;
    }

    // Check if the current sum matches the target. If so, a subarray summing up to the target has been found
    if (currentSum === target) {
      return true;
    }
  }

  // If the loop finishes iterating without finding a match, return false
  return false;
}

// Example usage
const arr = [4, 2, 7, 1, 9, 5];
const target = 14;
const result = hasContiguousSum(arr, target);
console.log(result); // Output: true (because [4, 2, 7, 1] sums up to 14)

/*
Time Complexity: O(n) - The code iterates through the input array only once using a sliding window approach.
Space Complexity: O(1) - It uses a constant amount of extra space for variables currentSum and left.
*/
