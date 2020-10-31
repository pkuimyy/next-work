import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EchartsDemoComponent } from './echarts-demo/echarts-demo.component';
import { InputPanelComponent } from './input-panel/input-panel.component';
import { OutputPanelComponent } from './output-panel/output-panel.component';


const routes: Routes = [
  { path: 'input', component: InputPanelComponent },
  { path: 'output', component: OutputPanelComponent },
  { path: '', component: InputPanelComponent },
  { path: 'demo', component: EchartsDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
