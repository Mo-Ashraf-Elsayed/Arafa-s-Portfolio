import { Component } from '@angular/core';
import { HeaderComponent } from "./componates/header/header.component";
import { FooterComponent } from "./componates/footer/footer.component";
import { RouterModule } from '@angular/router';
import { GearBoxComponent } from "../../core/components/gear-box/gear-box.component";

@Component({
    selector: 'app-style-one-home',
    imports: [HeaderComponent, FooterComponent, RouterModule],
    templateUrl: './style-one-home.component.html',
    styleUrl: './style-one-home.component.scss'
})
export class StyleOneHomeComponent {
    ngOnInit(): void {
        window.onload = () => {
            setTimeout(() => {
                document.getElementById('preloader')?.classList.add('fade-out');
                document.body.style.overflow = 'visible';
            }, 350);
        };
    }
}
