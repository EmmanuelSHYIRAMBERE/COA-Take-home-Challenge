/**
 * The function below checks if a contiguous subarray within the given array 'arr' adds up to the target sum 'target'
 */
function hasContiguousSum(arr, target) {
  // Initialize variables to track the current sum and the starting index of the subarray
  let currentSum = 0;
  let left = 0;

  // Check if the array contains between 1 and 100,000 elements.
  if (arr.length < 1 || arr.length > 100000) {
    throw new Error(
      `Invalid array: \"${arr.length}\" elements, the array will contain between 1 and 100,000 elements.`
    );
  }

  // Check if the target is below or exceeds the limit
  if (target < -1000000000 || target > 1000000000) {
    throw new Error(
      `Invalid target: \"${target}\", the target must range between -1,000,000,000 and 1,000,000,000.`
    );
  }

  // Loop through the entire array to check if the current element is outside the valid range
  for (let index = 0; index < arr.length; index++) {
    // Check if the current element is outside the valid range
    if (arr[index] < -1000000000 || arr[index] > 1000000000) {
      throw new Error(
        `Array contains element: \"${arr[index]}\" which is outside the valid range (-1,000,000,000 to 1,000,000,000)`
      );
    }
  }

  // Loop through the entire array for sub array manipulation
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
const arr = [4, 2, 7, 1, 9, 10000000005];
const target = 14;
const result = hasContiguousSum(arr, target);
console.log(result);
