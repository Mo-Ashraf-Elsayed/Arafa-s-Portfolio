import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CountUpModule } from 'ngx-countup';

@Component({
    selector: 'app-index3-default',
    imports: [CountUpModule, NgbAccordionModule],
    templateUrl: './index3-default.component.html',
    styleUrl: './index3-default.component.scss'
})
export class Index3DefaultComponent {

}
