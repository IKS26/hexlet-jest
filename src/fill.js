/* Создайте функцию fill(coll, value, start, end), которая заполняет элементы массива переданным значением, начиная со старта и заканчивая (но не включая) конечной позицией. Функция меняет исходный массив!
Функция принимает следующие аргументы:
coll — массив, элементы которого будут заполнены
value — значение, которым будут заполнены элементы массива
start — стартовая позиция, по умолчанию равна нулю
end — конечная позиция, по умолчанию равна длине массива
 */
const fill = (coll, value, start = 0, end = coll.length) => {
   if (start >= coll.length) {
      return coll;
   }
   for (let i = start; i < end && i < coll.length; i += 1) {
      coll[i] = value;
   }
   return coll;
};

export default fill;

let array = [1, 2, 3, 4];
fill(array, "*", 1, 3);
console.log(array); // => [1, '*', '*', 4]

array = [1, 2, 3, 4];
fill(array, "*");
console.log(array); // => ['*', '*', '*', '*']

array = [1, 2, 3, 4];
fill(array, "*", 4);
console.log(array); // => [1, 2, 3, 4]

array = [1, 2, 3, 4];
fill(array, "*", 0, 10);
console.log(array); // => ['*', '*', '*', '*']
