const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

const arr = [ 1, 2, 3, 4];

// res1 is now a shuffled array version of target
const res1 = shuffleArray(arr);

// the utility works with any kind of array values
const res2 = shuffleArray([ 'one', 'two', 'three', 'four' ]);