import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaboresComponent } from './sabores/sabores.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sabor/:id', component: SaboresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
