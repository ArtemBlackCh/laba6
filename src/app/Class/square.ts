export class Square {
  name: string;
  side: number;

  constructor(name: string, side: number) {
    if (name.trim() === '') {
      throw new Error('Назва не може бути порожньою');
    }
    if (!Number.isFinite(side) || side <= 0) {
      throw new Error('Сторона має бути числом більше 0');
    }
    this.name = name;
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}
