function permutation(nums: number[], result: number[][], current: number[]) {
  console.log(current);
  if (current.length === nums.length) {
    result.push([...current]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!current.includes(nums[i])) {
      current.push(nums[i]);
      permutation(nums, result, current);
      current.pop();
    }
  }

  return result;
}

function permute(nums: number[]): number[][] {
  let result: number[][] = [];

  permutation(nums, result, []);

  return result;
}

function traversal(
  nums: number[],
  result: number[][],
  visited: Map<number, boolean>,
  current: number[],
) {
  if (current.length === nums.length) {
    result.push([...current]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (!visited.get(nums[i])) {
      visited.set(nums[i], true);
      current.push(nums[i]);
      traversal(nums, result, visited, current);
      visited.set(nums[i], false);
      current.pop();
    }
  }

  return result;
}

function permute2(nums: number[]): number[][] {
  let result: number[][] = [];
  let visited = new Map();

  traversal(nums, result, visited, []);

  return result;
}

console.log(permute([1, 2, 3]));
// console.log(permute2([1, 2, 3]));
