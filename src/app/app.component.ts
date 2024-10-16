import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ResistorCalculatorComponent } from './tools/resistor-calculator/resistor-calculator.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavBarComponent,
    ResistorCalculatorComponent,
    ShortNumberPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crysthofferattier.github.io';
}
