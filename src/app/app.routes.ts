import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ResistorCalculatorComponent } from './tools/resistor-calculator/resistor-calculator.component';
import { ToolsComponent } from './tools/tools.component';
import { HomeComponent } from './home/home.component';
import { OhmsLawComponent } from './electronic-engineering/electronic-circuits/ohms-law/ohms-law.component';
import { SeriesCircuitsComponent } from './electronic-engineering/electronic-circuits/series-circuits/series-circuits.component';
import { IntroductionComponent } from './electronic-engineering/electronic-circuits/introduction/introduction.component';
import { ParallelCircuitsComponent } from './electronic-engineering/electronic-circuits/parallel-circuits/parallel-circuits.component';
import { SeriesParallelCircuitsComponent } from './electronic-engineering/electronic-circuits/series-parallel-circuits/series-parallel-circuits.component';
import { PlcIntroductionComponent } from './home/programmable-logic-controller/plc-introduction/plc-introduction.component';
import { LadderLogicComponent } from './home/programmable-logic-controller/ladder-logic/ladder-logic.component';
import { RelaysAndContactsComponent } from './home/programmable-logic-controller/ladder-logic/basic-electrical-concepts/relays-and-contacts/relays-and-contacts.component';
OhmsLawComponent

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'home/programmable-logic-controller/introduction',
        component: PlcIntroductionComponent
    },
    {
        path: 'home/programmable-logic-controller/ladder-logic',
        component: LadderLogicComponent
    },
    {
        path: 'home/programmable-logic-controller/ladder-logic/basic-electrical-concepts/relays-and-contacts',
        component: RelaysAndContactsComponent
    },
    {
        path: 'tools',
        component: ToolsComponent
    },
    {
        path: 'tools/resistor-calculator',
        component: ResistorCalculatorComponent
    },
    {
        path: 'electronic-engineering/electronic-circuits/introduction',
        component: IntroductionComponent
    },
    {
        path: 'electronic-engineering/electronic-circuits/ohms-law',
        component: OhmsLawComponent
    },
    {
        path: 'electronic-engineering/electronic-circuits/series-circuits',
        component: SeriesCircuitsComponent
    },
    {
        path: 'electronic-engineering/electronic-circuits/parallel-circuits',
        component: ParallelCircuitsComponent
    },
    {
        path: 'electronic-engineering/electronic-circuits/series-parallel-circuits',
        component: SeriesParallelCircuitsComponent
    },
];
