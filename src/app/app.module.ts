import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import {FormsModule} from '@angular/forms';
import { TasksFilterPipe } from './pipes/tasks-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
