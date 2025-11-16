import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CountUpModule } from 'ngx-countup';

@Component({
    selector: 'app-services-details',
    imports: [CommonModule, CountUpModule, RouterLink],
    templateUrl: './services-details.component.html',
    styleUrl: './services-details.component.scss'
})
export class ServicesDetailsComponent {

  icons = [
    { src: 'assets/img/icon/icon-17.png', alt: 'icon 17', percent: 92 },
    { src: 'assets/img/icon/icon-18.png', alt: 'icon 18', percent: 92 },
    { src: 'assets/img/icon/icon-19.png', alt: 'icon 19', percent: 92 },
    { src: 'assets/img/icon/icon-20.png', alt: 'icon 20', percent: 92 },
    { src: 'assets/img/icon/icon-21.png', alt: 'icon 21', percent: 92 }
  ];

}
