import { Component } from '@angular/core';
import { GearBoxComponent } from "../../core/components/gear-box/gear-box.component";
import { RouterModule } from '@angular/router';
import { Index3FooterComponent } from "./pages/index3-footer/index3-footer.component";
import { Index3HeaderComponent } from "./pages/index3-header/index3-header.component";

@Component({
    selector: 'app-index-3',
    imports: [GearBoxComponent, RouterModule, Index3FooterComponent, Index3HeaderComponent],
    templateUrl: './index-3.component.html',
    styleUrl: './index-3.component.scss'
})
export class Index3Component {

}
