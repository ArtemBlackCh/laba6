import { randomInt } from './randomInt';

export class ArrayTwo {
  readonly rows: number;
  readonly cols: number;
  readonly min: number;
  readonly max: number;
  items: number[][] = [];

  constructor(rows: number, cols: number, min: number, max: number) {
    if (!Number.isInteger(rows) || rows <= 0 || !Number.isInteger(cols) || cols <= 0) {
      throw new Error('Розмірність масиву має бути натуральними числами');
    }
    if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
      throw new Error('Некоректний діапазон значень масиву');
    }
    this.rows = rows;
    this.cols = cols;
    this.min = min;
    this.max = max;
  }

  fill(): void {
    this.items = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, () => randomInt(this.min, this.max))
    );
  }

  set(values: number[][]): void {
    if (values.length !== this.rows || values.some((r) => r.length !== this.cols)) {
      throw new Error('Невірна розмірність масиву');
    }
    for (const row of values) {
      for (const x of row) {
        if (!Number.isInteger(x)) {
          throw new Error('Усі елементи мають бути цілими числами');
        }
        if (x < this.min || x > this.max) {
          throw new Error('Елементи мають бути в діапазоні [' + this.min + ', ' + this.max + ']');
        }
      }
    }
    this.items = values.map((r) => [...r]);
  }

  columnMeans(): number[] {
    if (this.items.length === 0) {
      throw new Error('Масив не заповнено');
    }
    return Array.from({ length: this.cols }, (_, j) => {
      let sum = 0;
      for (let i = 0; i < this.rows; i++) {
        sum += this.items[i][j];
      }
      return sum / this.rows;
    });
  }
}
