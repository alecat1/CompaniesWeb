import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaestroCompanies } from '../maestro-companies/maestro-companies.component';
import { EditCompanie } from '../edit-companie/edit-companie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainListComponent } from '../main-list/main-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MaestroCompanies,
    EditCompanie,
    MainListComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MaestroCompanies, EditCompanie, MainListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
