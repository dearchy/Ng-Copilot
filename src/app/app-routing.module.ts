import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // to create a home page with the path of '' and the component of HomeComponent
  { path: '', component: HomeComponent },
  // create a path of home that redirects to the home page
  { path: 'home', component: HomeComponent },
  // creta a default path that redirects to the home page
  { path: '**', redirectTo: 'home' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
