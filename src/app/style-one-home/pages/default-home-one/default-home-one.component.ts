import { Component } from '@angular/core';
import { TestimonialComponent } from "../../../../core/components/testimonial/testimonial.component";
import { GearBoxComponent } from '../../../../core/components/gear-box/gear-box.component';

@Component({
    selector: 'app-default-home-one',
    imports: [TestimonialComponent, GearBoxComponent],
    templateUrl: './default-home-one.component.html',
    styleUrl: './default-home-one.component.scss'
})
export class DefaultHomeOneComponent {

}
