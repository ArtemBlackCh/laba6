import { Component } from '@angular/core';
import { Header } from './header/header';
import { Shapes } from './shapes/shapes';

@Component({
  imports: [Header, Shapes],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
