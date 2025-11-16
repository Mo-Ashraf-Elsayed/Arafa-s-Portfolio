import { Component, HostListener, inject } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { HeaderSidebarComponent } from '../../../../core/components/header-sidebar/header-sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-index-2-header',
    imports: [RouterLink],
    templateUrl: './index-2-header.component.html',
    styleUrl: './index-2-header.component.scss'
})
export class Index2HeaderComponent {
  private offcanvasService = inject(NgbOffcanvas);
  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50; // Adjust scroll position threshold as needed
  }

  openEnd() {
    this.offcanvasService.open(HeaderSidebarComponent, { panelClass: 'slide-bar', position: 'end' });
  }
}
