import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MyTdFormComponent } from './my-td-form/my-td-form.component';
import { MyRFormComponent } from './my-r-form/my-r-form.component';
import { ReactiveAssignmentComponent } from './reactive-assignment/reactive-assignment.component';
import { TemperatureComponent } from './challenges/temperature/temperature.component';
import { TodoListComponent } from './challenges/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTdFormComponent,
    MyRFormComponent,
    ReactiveAssignmentComponent,
    TemperatureComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
