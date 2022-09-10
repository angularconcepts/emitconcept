import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StdApproachComponent } from './std-approach/std-approach.component';
import { AltApproachComponent } from './alt-approach/alt-approach.component';
import { AltApproachChildComponent } from './alt-approach/alt-approach-child/alt-approach-child.component';
import { StdApproachChildComponent } from './std-approach/std-approach-child/std-approach-child.component';

@NgModule({
  declarations: [
    AppComponent,
    StdApproachComponent,
    AltApproachComponent,
    AltApproachChildComponent,
    StdApproachChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
