// @ts-check

import _ from "lodash";

const get = (arr, index, defaultValue) => {
   if (index >= arr.length || index < 0) {
      if (_.isNil(defaultValue)) {
         return null;
      }
      return defaultValue;
   }
   return arr[index];
};

console.log(get([1, 2, 3], 1));
console.log(get([1, 2, 3], -1));
console.log(get([1, 2, 3], 4, "default"));
console.log(get([1, 2, 3], 1, "default"));
console.log(get([1, 2, 3], -1, "default"));

export default get;
