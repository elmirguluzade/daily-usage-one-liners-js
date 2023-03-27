const removeDuplicates = (arr) => [...new Set(arr)];

// res is [ 1, 2, 3, 4 ]
const res = removeDuplicates([1, 2, 2, 3, 4, 1])