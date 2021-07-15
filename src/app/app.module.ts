import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponentComponent } from './task-module/task-component/task-component.component';
import { TaskModuleModule } from './task-module/task-module.module';
import { ComponentReviewComponent } from './component-review/component-review.component';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentReviewComponent,
    HighlightDirective,
    UnlessDirective,
    ItemdetailComponent
  ],
  imports: [
    BrowserModule,
    TaskModuleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
