import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltApproachComponent } from './alt-approach/alt-approach.component';
import { StdApproachComponent } from './std-approach/std-approach.component';

const routes: Routes = [
  { path: 'standard', component: StdApproachComponent },
  { path: 'alternate', component: AltApproachComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
