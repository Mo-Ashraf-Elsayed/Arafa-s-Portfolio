import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgbActiveOffcanvas, NgbModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { MENUITEMS } from '../../../app/style-one-home/componates/header/menu-data';
import { MenuItem } from '../../../app/style-one-home/componates/header/menu-modal';

@Component({
    selector: 'app-header-sidebar',
    imports: [RouterLink, CommonModule, NgbModule],
    templateUrl: './header-sidebar.component.html',
    styleUrl: './header-sidebar.component.scss'
})
export class HeaderSidebarComponent {
  digitalMenusItems = MENUITEMS;
  activeOffcanvas = inject(NgbActiveOffcanvas);
  currentRoute:string=''

  constructor(private router: Router){
    this.currentRoute = this.router.url
  }

  toggleCollapse(menu: MenuItem): void {
    if (!menu.subItems?.length) {
      return
    }
 
    this.digitalMenusItems.forEach((item) => {
      if (item !== menu) {
        item.isCollapsed = true;
      }
    });

    menu.isCollapsed = !menu.isCollapsed;
  }

  toggleInnerCollapse(subMenu: MenuItem): void {
    if (!subMenu.subItems?.length) {
      return;
    }

    subMenu.isCollapsed = !subMenu.isCollapsed;

    console.log(subMenu);

  }
}
