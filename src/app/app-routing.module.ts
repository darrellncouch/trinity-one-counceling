import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PracticeComponent } from './pages/practice/practice.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "practice", component: PracticeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
