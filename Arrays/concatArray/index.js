function getConcatenation(nums) {
  if (!nums) return [];

  // return [...nums, ...nums];

  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result[i] = nums[i];
    result[i + nums.length] = nums[i];
  }
  return result;
}

module.exports = getConcatenation;
