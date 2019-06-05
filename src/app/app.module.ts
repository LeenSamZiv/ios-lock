import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SlideHorizontalDirective, SlideVerticalDirective} from './app.directive';

@NgModule({
  declarations: [
    AppComponent,
    SlideHorizontalDirective,
    SlideVerticalDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
