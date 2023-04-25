// import { test, expect } from 'vitest';
import {sum} from "./index";


test('sums two numbers', () => {
    expect(sum(4, 7)).toBe(11);
});