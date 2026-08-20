import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-carousel',
  styleUrl: './carousel.css',
  templateUrl: './carousel.html',
})
export class Carousel {
  protected readonly slides = [
    {
      title: 'Slide 1',
      description: 'Conteudo do primeiro slide',
    },
    {
      title: 'Slide 2',
      description: 'Conteudo do segundo slide',
    },
    {
      title: 'Slide 3',
      description: 'Conteudo do terceiro slide',
    },
  ];

  protected readonly currentSlide = signal(0);
  protected readonly activeSlide = computed(() => this.slides[this.currentSlide()]);

  protected previousSlide() {
    this.currentSlide.update((index) =>
      index === 0 ? this.slides.length - 1 : index - 1,
    );
  }

  protected nextSlide() {
    this.currentSlide.update((index) =>
      index === this.slides.length - 1 ? 0 : index + 1,
    );
  }

  protected goToSlide(index: number) {
    this.currentSlide.set(index);
  }
}
