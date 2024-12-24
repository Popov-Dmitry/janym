export const swap = (arr, a, b) => {
  arr[a] = arr.splice(b, 1, arr[a])[0];

  return arr;
};