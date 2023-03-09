import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandmarksComponent } from './page/landmarks/landmarks.component';
import { ShowComponent } from './page/show/show.component';

//path router
const routes: Routes = [
  {path : '', component: LandmarksComponent},
  {path : 'show', component : ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
