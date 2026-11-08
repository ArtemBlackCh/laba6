import { Component, signal } from '@angular/core';
import { Square } from '../Class/square';
import { Rectangle } from '../Class/rectangle';

@Component({
  selector: 'app-shapes',
  imports: [],
  templateUrl: './shapes.html',
  styleUrl: './shapes.css',
})
export class Shapes {
  squareShow = signal('');
  rectangleShow = signal('');

  // округлення результату до 4 знаків
  private round(x: number): number {
    return Math.round(x * 10000) / 10000;
  }

  // розрахунок для квадрата
  calcSquare(name: string, side: string) {
    try {
      const square = new Square(name, parseFloat(side));
      this.squareShow.set(
        square.name + ': площа = ' + this.round(square.area())
      );
    } catch (e) {
      this.squareShow.set('Помилка: ' + (e as Error).message);
    }
  }

  // розрахунок для прямокутника
  calcRectangle(name: string, side: string, diff: string) {
    try {
      const rect = new Rectangle(name, parseFloat(side), parseFloat(diff));
      this.rectangleShow.set(
        rect.name +
          ': сторони ' +
          rect.side +
          ' і ' +
          this.round(rect.side + rect.diff) +
          ', площа = ' +
          this.round(rect.area())
      );
    } catch (e) {
      this.rectangleShow.set('Помилка: ' + (e as Error).message);
    }
  }
}
