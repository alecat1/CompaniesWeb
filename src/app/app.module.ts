import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaestroProductos } from '../maestro-productos/maestro-productos.component';
import { EditProduct } from '../edit-product/edit-product.component';
import { CreateProduct } from '../create-product/create-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MaestroProductos,
    CreateProduct,
    EditProduct
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MaestroProductos, EditProduct],
  bootstrap: [AppComponent]
})
export class AppModule { }
