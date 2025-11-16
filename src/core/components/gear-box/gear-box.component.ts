import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-gear-box',
    imports: [RouterLink, CommonModule, FormsModule],
    templateUrl: './gear-box.component.html',
    styleUrl: './gear-box.component.scss'
})
export class GearBoxComponent {
  isOpenGear = false;
  isDarkMode = false;

  onModeChange(){
    document.body.classList.toggle("dark-theme")
  }
}
