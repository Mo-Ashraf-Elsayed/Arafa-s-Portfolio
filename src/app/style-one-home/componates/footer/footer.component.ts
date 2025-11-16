import { Component } from '@angular/core';
import { MENUITEMSFORFOOTER } from '../header/menu-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    imports: [CommonModule, RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {

  currantYear= new Date().getFullYear();
  menu = MENUITEMSFORFOOTER.links;

  ngOnInit(){}
}
