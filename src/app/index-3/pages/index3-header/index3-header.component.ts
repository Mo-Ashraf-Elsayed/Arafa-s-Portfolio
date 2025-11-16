import { Component } from '@angular/core';

@Component({
    selector: 'app-index3-header',
    imports: [],
    templateUrl: './index3-header.component.html',
    styleUrl: './index3-header.component.scss'
})
export class Index3HeaderComponent {
  currantData = new Date().getFullYear();

  scroll(elem: string) {
    document.querySelector(elem)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
