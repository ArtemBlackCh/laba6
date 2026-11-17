import { Component, signal } from '@angular/core';
import { ArrayOne as ArrayModel } from '../Class/arrayOne';

@Component({
  selector: 'app-array-one',
  imports: [],
  templateUrl: './array-one.html',
  styleUrl: './array-one.css',
})
export class ArrayOne {
  private model = new ArrayModel(20, 200, 300);

  items = signal<number[]>([]);
  matched = signal<number[]>([]);
  sum = signal<number | null>(null);
  error = signal('');

  generate() {
    this.model.fill();
    this.items.set([...this.model.items]);
    this.matched.set([]);
    this.sum.set(null);
    this.error.set('');
  }

  calc(divisor: string, remainder: string) {
    this.sum.set(null);
    this.matched.set([]);
    if (divisor.trim() === '' || remainder.trim() === '') {
      this.error.set('Помилка: заповніть обидва поля');
      return;
    }
    try {
      const result = this.model.sumByRemainder(Number(divisor), Number(remainder));
      this.matched.set(result.matched);
      this.sum.set(result.sum);
      this.error.set('');
    } catch (e) {
      this.error.set('Помилка: ' + (e as Error).message);
    }
  }
}
