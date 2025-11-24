function backtrackWithDup(
  nums: number[],
  result: number[][],
  index: number,
  current: number[],
  lastProp?: number,
) {
  result.push([...current]);
  for (let i = index; i < nums.length; i++) {
    current.push(nums[i]);
    if (lastProp === nums[i]) {
      return;
    }
    backtrackWithDup(nums, result, i + 1, current, nums[i]);
    current.pop();
  }
}

function subsetsWithDup(nums: number[]): number[][] {
  let result: number[][] = [];

  backtrackWithDup(nums, result, 0, []);

  return result;
}

console.log(subsetsWithDup([1, 2, 2]));
