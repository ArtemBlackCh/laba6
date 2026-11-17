import { randomInt } from './randomInt';

export interface RemainderResult {
  sum: number;
  matched: number[];
}

export class ArrayOne {
  readonly size: number;
  readonly min: number;
  readonly max: number;
  items: number[] = [];

  constructor(size: number, min: number, max: number) {
    if (!Number.isInteger(size) || size <= 0) {
      throw new Error('Розмірність масиву має бути натуральним числом');
    }
    if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
      throw new Error('Некоректний діапазон значень масиву');
    }
    this.size = size;
    this.min = min;
    this.max = max;
  }

  fill(): void {
    this.items = Array.from({ length: this.size }, () =>
      randomInt(this.min, this.max)
    );
  }

  sumByRemainder(divisor: number, remainder: number): RemainderResult {
    if (this.items.length === 0) {
      throw new Error('Масив не заповнено');
    }
    if (!Number.isInteger(divisor) || divisor < 1) {
      throw new Error('Дільник має бути цілим числом не меншим за 1');
    }
    if (!Number.isInteger(remainder) || remainder < 0) {
      throw new Error('Залишок має бути цілим числом не меншим за 0');
    }
    const matched = this.items.filter((x) => x % divisor === remainder);
    const sum = matched.reduce((acc, x) => acc + x, 0);
    return { sum, matched };
  }
}
