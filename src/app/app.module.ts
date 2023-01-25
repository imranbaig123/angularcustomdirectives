import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SetBackgroundDirective } from './CustomDirective/setbackground.directive';
import { HighlightDirective } from './customdirective/highlight.directive';
import { HoverDirective } from './customdirective/hover.directive';
import { BetterhighlightDirective } from './customdirective/betterhighlight.directive';
import { ClassDirective } from './CustomDirective/class.directive';
import { StyleDirective } from './customdirective/style.directive';
import { IfDirective } from './customdirective/if.directive'

@NgModule({
  declarations: [
    AppComponent,
    SetBackgroundDirective,
    HighlightDirective,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective,
    StyleDirective,
    IfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
