// https://leetcode.com/problems/search-in-rotated-sorted-array/description/?envType=study-plan-v2&envId=binary-search

function search(nums: number[], target: number): number {
  let l = 0;
  let h = nums.length - 1;

  while (l <= h) {
    const p = Math.floor((l + h) / 2);
    if (nums[p] === target) {
      return p;
    } else if (nums[p] > nums[l]) {
      if (target >= nums[l] && target <= nums[p - 1]) {
        h = p - 1;
      } else {
        l = p + 1;
      }
    } else {
      if (target >= nums[p + 1] && target <= nums[h]) {
        l = p + 1;
      } else {
        h = p - 1;
      }
    }
  }

  return -1;
}

export default search;
