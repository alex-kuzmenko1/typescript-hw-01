function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}
const merged = merge({ name: 'Max' }, { age: 30 });
console.log(merged);

export {};