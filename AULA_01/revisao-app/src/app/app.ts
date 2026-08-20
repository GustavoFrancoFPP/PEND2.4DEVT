import { Component, signal } from '@angular/core';

import { Footer } from './footer/footer';
import { Card } from './card/card';
import { Carousel } from './carousel/carousel';

@Component({
  imports: [Footer, Card, Carousel],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('revisao-app');
}
