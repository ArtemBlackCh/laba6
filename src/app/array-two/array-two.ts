import { Component, signal } from '@angular/core';
import { ArrayTwo as ArrayModel } from '../Class/arrayTwo';

@Component({
  selector: 'app-array-two',
  imports: [],
  templateUrl: './array-two.html',
  styleUrl: './array-two.css',
})
export class ArrayTwo {
  private model = new ArrayModel(4, 5, -10, 10);

  cells = signal<string[][]>(
    Array.from({ length: 4 }, () => Array.from({ length: 5 }, () => ''))
  );
  means = signal<number[]>([]);
  error = signal('');

  private round(x: number): number {
    return Math.round(x * 10000) / 10000;
  }

  generate() {
    this.model.fill();
    this.cells.set(this.model.items.map((r) => r.map((x) => String(x))));
    this.means.set([]);
    this.error.set('');
  }

  setCell(i: number, j: number, event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.cells.update((m) => m.map((r, ri) => (ri === i ? r.map((c, ci) => (ci === j ? value : c)) : r)));
    this.means.set([]);
  }

  calc() {
    this.means.set([]);
    const raw = this.cells();
    if (raw.some((r) => r.some((c) => c.trim() === ''))) {
      this.error.set('Помилка: заповніть усі клітинки масиву');
      return;
    }
    try {
      this.model.set(raw.map((r) => r.map((c) => Number(c))));
      this.means.set(this.model.columnMeans().map((x) => this.round(x)));
      this.error.set('');
    } catch (e) {
      this.error.set('Помилка: ' + (e as Error).message);
    }
  }
}
