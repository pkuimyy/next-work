import { NgModule, Output } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputPanelComponent } from './input-panel/input-panel.component';
import { OutputPanelComponent } from './output-panel/output-panel.component';


const routes: Routes = [
  { path: '', component: InputPanelComponent },
  { path: 'output', component: OutputPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
