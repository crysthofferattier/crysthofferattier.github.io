import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CheatSheetComponent } from './cheat-sheet/cheat-sheet.component';
import { HomeComponent } from './home/home.component';
import { ReverseShellComponent } from './cheat-sheet/reverse-shell/reverse-shell.component';
import { ToolsComponent } from './tools/tools.component';
import { PatternCreateComponent } from './tools/pattern-create/pattern-create.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cheat-sheet', component: CheatSheetComponent },
  { path: 'cheat-sheet/reverse-shell', component: ReverseShellComponent },
  { path: 'tools', component: ToolsComponent },
  { path: 'tools/pattern-create', component: PatternCreateComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CheatSheetComponent,
    HomeComponent,
    ReverseShellComponent,
    ToolsComponent,
    PatternCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
