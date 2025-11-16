import { Component, HostListener, inject } from '@angular/core';
import { MENUITEMS } from './menu-data';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { HeaderSidebarComponent } from '../../../../core/components/header-sidebar/header-sidebar.component';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menu = MENUITEMS;
  private offcanvasService = inject(NgbOffcanvas);

  openEnd() {
    this.offcanvasService.open(HeaderSidebarComponent, { panelClass: 'slide-bar', position: 'end' });
  }

  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50; // Adjust scroll position threshold as needed
  }

}
