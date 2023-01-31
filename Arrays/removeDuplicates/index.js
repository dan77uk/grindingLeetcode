function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let leftPointer = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[leftPointer] = nums[i];
      leftPointer += 1;
    }
  }

  return leftPointer;
}

module.exports = removeDuplicates;
