import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponentComponent } from './task-component/task-component.component';



@NgModule({
  declarations: [
    TaskComponentComponent ],
  imports: [
    CommonModule
  ],
  exports: [
    TaskComponentComponent
  ]
})
export class TaskModuleModule { }
