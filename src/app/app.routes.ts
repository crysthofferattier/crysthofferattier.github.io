import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResistorCalculatorComponent } from './tools/resistor-calculator/resistor-calculator.component';
import { ToolsComponent } from './tools/tools.component';
import { HomeComponent } from './home/home.component';
import { OhmsLawComponent } from './electronic-engineering/ohms-law/ohms-law.component';
import { SeriesCircuitsComponent } from './electronic-engineering/series-circuits/series-circuits.component';
OhmsLawComponent

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tools', component: ToolsComponent },
    { path: 'tools/resistor-calculator', component: ResistorCalculatorComponent },    
    { path: 'electronic-engineering/ohms-law', component: OhmsLawComponent },
    { path: 'electronic-engineering/series-circuits', component: SeriesCircuitsComponent }
];
