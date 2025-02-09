function searchRange(nums: number[], target: number): number[] {
  let l = 0;
  let h = nums.length - 1;

  while (l <= h) {
    const m = Math.floor((l + h) / 2);
    if (nums[m] === target) {
      let i = m;
      let j = m;
      while (nums[i] === target) {
        i = i - 1;
      }
      while (nums[j] === target) {
        j = j + 1;
      }
      return [i + 1, j - 1];
    } else if (nums[m] > target) {
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return [-1, -1];
}

export default searchRange;
