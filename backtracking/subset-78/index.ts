function subsets(nums: number[]): number[][] {
  let result: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    const tempRs = result.map((item) => [...item, nums[i]]);
    result = [...result, [nums[i]], ...tempRs];
  }

  return [[], ...result];
}

function backtrack(
  nums: number[],
  result: number[][],
  index: number,
  current: number[],
) {
  result.push([...current]);
  for (let i = index; i < nums.length; i++) {
    current.push(nums[i]);
    backtrack(nums, result, i + 1, current);
    current.pop();
  }
}

function subsets2(nums: number[]): number[][] {
  let result: number[][] = [];

  backtrack(nums, result, 0, []);

  return result;
}

console.log(subsets2([1, 2, 3]));
