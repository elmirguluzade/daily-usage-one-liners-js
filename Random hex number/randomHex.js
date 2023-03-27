const randomHex = () => `#${Math.random().toString(16).slice(2,9).padEnd(6,'0')}`;

// ✅ res is now a hex value like #c3fd5db
const res = randomHex();