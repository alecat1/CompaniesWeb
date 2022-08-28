import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProduct } from '../create-product/create-product.component'

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path:'create', component:CreateProduct},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
