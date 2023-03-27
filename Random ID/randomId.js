const randomId = () => Math.random().toString(36).substring(2) || '0';

// res will be '0' when Math.random() is 0
const res = randomId();
console.log(res);