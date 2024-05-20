// @ts-check
import { test, expect } from "@jest/globals";
import get from "../src/get.js";
import slice from "../src/slice.js";
import indexOf from "../src/indexOf.js";

test("testing function get()", () => {
   const actual1 = get([1, 2, 3], 1, "default");
   expect(actual1).toBe(2);

   const actual2 = get([1, 2, 3], 4, "default");
   expect(actual2).toBe("default");

   const actual3 = get([1, 2, 3], 4);
   expect(actual3).toBeNull();

   const actual4 = get([1, 2, 3], -1, "default");
   expect(actual4).toBe("default");

   const actual5 = get([1, 2, 3], 1);
   expect(actual5).toBe(2);

   const actual6 = get([1, 2, 3], -1);
   expect(actual6).toBeNull();
});

test("testing function slice()", () => {
   const actual1 = slice([1, 2, 3, 4, 5, 6], 1, 4);
   expect(actual1).toEqual([2, 3, 4]);

   const actual2 = slice([1, 2, 3, 4, 5, 6], 1, 10);
   expect(actual2).toEqual([2, 3, 4, 5, 6]);

   const actual3 = slice([1, 2, 3, 4, 5, 6], 1);
   expect(actual3).toEqual([2, 3, 4, 5, 6]);

   const actual4 = slice([], 1, 3);
   expect(actual4).toEqual([]);

   const actual5 = slice([1, 2, 3, 4, 5, 6], -1, 10);
   expect(actual5).toEqual([6]);

   const actual6 = slice([1, 2, 3, 4, 5, 6], -1);
   expect(actual6).toEqual([6]);

	const actual7 = slice([1, 2, 3, 4, 5, 6], -10);
	expect(actual7).toEqual([1, 2, 3, 4, 5, 6]);
});

test("testing function indexOf()", () => {
   const actual1 = indexOf([2, 7, 3, 2, 4], 2);
   expect(actual1).toBe(0);

   const actual2 = indexOf([2, 7, 3, 2, 4], 2, 1);
   expect(actual2).toBe(3);

   const actual3 = indexOf([], 2, 2);
   expect(actual3).toBe(-1);

   const actual4 = indexOf([2, 7, 3, 2, 4], 2, -7);
   expect(actual4).toBe(0);

   const actual5 = indexOf([2, 7, 3, 2, 4], 2, -4);
   expect(actual5).toBe(3);
});
