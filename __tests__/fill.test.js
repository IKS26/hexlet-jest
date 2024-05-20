import fill from "../src/fill.js";
import { expect } from "@jest/globals";

let array;

beforeEach(() => {
   array = [1, 2, 3, 4];
});

test("common case", () => {
   fill(array, "*", 1, 3);
   expect(array).toEqual([1, "*", "*", 4]);
});

test("should use default start and end", () => {
   fill(array, "*");
   expect(array).toEqual(["*", "*", "*", "*"]);
});

test("should work with start >= length", () => {
   fill(array, "*", 10, 12);
   expect(array).toEqual([1, 2, 3, 4]);
});

test("should work with start >= end", () => {
   fill(array, "*", 2, 2);
   expect(array).toEqual([1, 2, 3, 4]);
});

test("should work with end > length", () => {
   fill(array, "*", 0, 10);
   expect(array).toEqual(["*", "*", "*", "*"]);
});
