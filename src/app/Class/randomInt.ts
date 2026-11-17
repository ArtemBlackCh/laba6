export function randomInt(min: number, max: number): number {
  if (!Number.isInteger(min) || !Number.isInteger(max) || min > max) {
    throw new Error('Некоректний діапазон генерації');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
