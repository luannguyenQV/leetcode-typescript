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

  let lastPop;
  for (let i = 0; i < nums.length; i++) {
    // not visited yet
    // && not equal to previous
    if (!visited.get(i) && lastPop !== nums[i]) {
      visited.set(i, true);
      current.push(nums[i]);
      traversal(nums, result, visited, current);
      visited.set(i, false);
      lastPop = current.pop();
    }
  }
}

function permutationDuplicated(nums: number[]): number[][] {
  let result: number[][] = [];
  let visited = new Map<number, boolean>();
  traversal([...nums.sort()], result, visited, []);

  return result;
}

console.log(permutationDuplicated([1, 1, 3]));
