import { Component, ViewChild, viewChild } from '@angular/core';
import { CarouselComponent, CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-testimonial',
    imports: [CarouselModule],
    templateUrl: './testimonial.component.html',
    styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
  @ViewChild('feedbackSection', { static: false }) feedbackSection!: CarouselComponent

  option: OwlOptions = {
    autoplay: true,
    loop: true,
    items: 1,
    dots: true
  }
}
