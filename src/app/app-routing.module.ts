import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaestroCompanies } from '../maestro-companies/maestro-companies.component'

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {path:'companies', component:MaestroCompanies},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
