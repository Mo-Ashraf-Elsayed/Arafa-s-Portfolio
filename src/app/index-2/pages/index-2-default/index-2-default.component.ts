import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TestimonialComponent } from '../../../../core/components/testimonial/testimonial.component';

@Component({
    selector: 'app-index-2-default',
    imports: [TestimonialComponent],
    templateUrl: './index-2-default.component.html',
    styleUrl: './index-2-default.component.scss'
})
export class Index2DefaultComponent {

}
