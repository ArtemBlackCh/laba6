import { Square } from './square';

export class Rectangle extends Square {
  diff: number; 

  constructor(name: string, side: number, diff: number) {
    
    super(name, side);
    if (!Number.isFinite(diff) || diff < 0) {
      throw new Error('Різниця сторін має бути числом, не меншим за 0');
    }
    this.diff = diff;
  }

  
  override area(): number {
    return this.side * (this.side + this.diff);
  }
}
