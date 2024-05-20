// @ts-check

const slice = (coll, start = 0, end = coll.length) => {
   const collLength = coll.length;
   if (collLength === 0) {
      return [];
   }
   let normalizedStart = start;

   if (normalizedStart < 0) {
      if (-normalizedStart > collLength) {
         normalizedStart = 0;
      } else {
         normalizedStart += collLength;
      }
   }

   return coll.slice(normalizedStart, end);
};

const numbers = [1, 2, 3, 4, 5];
console.log(slice(numbers)); // [1, 2, 3, 4, 5]
console.log(slice(numbers, 1, 4)); // [2, 3, 4]
console.log(slice(numbers, -4, -2)); // [2, 3]
console.log(slice(numbers, 7)); // []
console.log(slice(numbers, -8, 8)); // [1, 2, 3, 4, 5]

export default slice;
