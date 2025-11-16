import { Component } from '@angular/core';
import { MENUITEMSFORFOOTER } from '../../../style-one-home/componates/header/menu-data';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-index-2-footer',
    imports: [CommonModule, RouterModule],
    templateUrl: './index-2-footer.component.html',
    styleUrl: './index-2-footer.component.scss'
})
export class Index2FooterComponent {
currantYear= new Date().getFullYear();
menus = MENUITEMSFORFOOTER.links;
bottamFootersMenu = MENUITEMSFORFOOTER.bottamFooters;
}
