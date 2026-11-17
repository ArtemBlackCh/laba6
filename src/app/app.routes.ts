import { Routes } from '@angular/router';
import { Shapes } from './shapes/shapes';
import { ArrayOne } from './array-one/array-one';
import { ArrayTwo } from './array-two/array-two';

export const routes: Routes = [
  { path: '', redirectTo: 'shapes', pathMatch: 'full' },
  { path: 'shapes', component: Shapes },
  { path: 'array-one', component: ArrayOne },
  { path: 'array-two', component: ArrayTwo },
  { path: '**', redirectTo: 'shapes' },
];
