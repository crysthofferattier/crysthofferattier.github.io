import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResistorCalculatorComponent } from './tools/resistor-calculator/resistor-calculator.component';
import { ToolsComponent } from './tools/tools.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tools', component: ToolsComponent },
    { path: 'tools/resistor-calculator', component: ResistorCalculatorComponent }
];
