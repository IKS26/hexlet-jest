// @ts-check

const indexOf = (coll, value, fromIndex = 0) => {
   const collLength = coll.length;

   if (collLength === 0) {
      return -1;
   }
   let index = fromIndex;

   if (index < 0) {
      if (-index > collLength) {
         index = 0;
      } else {
         index += collLength;
      }
   }

   return coll.indexOf(value, index);
};

const numbers = [1, 2, 3, 2, 5];
console.log(indexOf(numbers, 2)); // 1
console.log(indexOf(numbers, 7)); // -1
console.log(indexOf(numbers, 2, -3)); // 3
console.log(indexOf(numbers, 2, -10)); // 1

export default indexOf;
