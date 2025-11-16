import { Component } from '@angular/core';
import { Index2HeaderComponent } from "./index-2-componates/index-2-header/index-2-header.component";
import { RouterModule } from '@angular/router';
import { Index2FooterComponent } from "./index-2-componates/index-2-footer/index-2-footer.component";
import { GearBoxComponent } from "../../core/components/gear-box/gear-box.component";

@Component({
    selector: 'app-index-2',
    imports: [Index2HeaderComponent, RouterModule, Index2FooterComponent, GearBoxComponent],
    templateUrl: './index-2.component.html',
    styleUrl: './index-2.component.scss'
})
export class Index2Component {

}
