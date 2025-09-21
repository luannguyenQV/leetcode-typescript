function merge(arr1: number[], arr2: number[]): number[] {
  const lt = arr1.length;
  const rt = arr2.length;
  let i = 0;
  let j = 0;
  const newArr = [];

  while (i < lt && j < rt) {
    if (arr1[i] === arr2[j]) {
      newArr.push(arr1[i]);
      newArr.push(arr2[j]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < lt) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < rt) {
    newArr.push(arr2[j]);
    j++;
  }
  return newArr;
}

function sort(arr: number[], left: number, right: number): number[] {
  if (left >= right) {
    return [arr[left]];
  }
  const mid = Math.floor((left + right) / 2);
  const rs1 = sort(arr, left, mid);
  const rs2 = sort(arr, mid + 1, right);
  return merge(rs1, rs2);
}

function main() {
  console.log(sort([6, 7, 8, 5, 4, 3, 2, 1, 9, 10], 0, 9));
  console.log(sort([6], 0, 0));
  console.log(sort([6, 5], 0, 1));
  console.log(sort([6, 6, 6, 5, 4, 3, 2, 1, 0], 0, 8));
}

main();
