import { Component,NgModule,OnInit } from '@angular/core';
import { ProductsList } from '../models/products.interface';
import { NewProduct } from '../models/new-product.interface';
import { EditProduct } from '../edit-product/edit-product.component'
import { GetProduct } from '../models/get-product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import $ from "jquery";

@Component({
  selector: 'maestro-productos',
  templateUrl: './maestro-productos.component.html',
  styleUrls: ['./maestro-productos.component.css']
})


export class MaestroProductos implements OnInit{
  products:ProductsList[];
  title = 'Maestro Productos';
  url = 'http://190.60.208.195:9192/api/Producto/';
  modal = false
  modalEdit = false
  constructor(private http: HttpClient, private router:Router, private edit:EditProduct) { }

  ngOnInit(){
    this.getAllProducts()
    this.getData()
}
  getAllProducts():Observable<ProductsList[]>{
    let products_api = this.url + 'ConsultarProductos'
    return this.http.get<ProductsList[]>(products_api);
  }
  getData(){
    this.getAllProducts().subscribe(data => {
        this.products = data
    }
    )
  }
  createProduct(){
    $("#createModal").show();  
    $("#createModal").css('background-color', 'rgba(0, 0, 0, 0.5)')  
  }
  editProduct(id){
    this.edit.postData1(id)
    test = id
    $("#editModal").show();  
    $("#editModal").css('background-color', 'rgba(0, 0, 0, 0.5)')  
    

  }


}
export var test
export function testid(){
    return test;
}
