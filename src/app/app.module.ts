import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InputPanelComponent } from './input-panel/input-panel.component';
import { OutputPanelComponent } from './output-panel/output-panel.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EchartsDemoComponent } from './echarts-demo/echarts-demo.component';
import * as echarts from 'echarts';

@NgModule({
  declarations: [
    AppComponent,
    InputPanelComponent,
    OutputPanelComponent,
    EchartsDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatTableModule,
    DragDropModule,
    FormsModule,
    MatIconModule,
    NgxEchartsModule.forRoot({ echarts }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
