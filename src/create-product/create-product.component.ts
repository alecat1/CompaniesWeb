import { Component,NgModule,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductsList} from '../models/products.interface';
import { NewProduct} from '../models/new-product.interface';
import { PostI} from '../models/post.interface';
import $ from "jquery";

@Component({
  selector: 'create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProduct implements OnInit{
    newProductForm = new FormGroup({
        codigoProducto: new FormControl(''),
        eanproducto: new FormControl(''),
        nombre: new FormControl(''),
        precio: new FormControl(''),
        idCategoriaProducto: new FormControl(''),
        })
    url = 'http://190.60.208.195:9192/api/Producto/';
  constructor(private http: HttpClient, private router:Router) { }
  ngOnInit(){
    $('.close').click(function (event) {
        $("#createModal").hide();    
        $("#createModal").css('background-color', '')  
       });
       $('.btn-secondary').click(function (event) {
           $("#createModal").hide();   
           $("#createModal").css('background-color', '')  
       });
}
  createProduct(form:NewProduct):Observable<PostI>{
    let products_api = this.url + 'CrearProducto'
    return this.http.post<PostI>(products_api,form);
  }
  postData(form:NewProduct){
    this.createProduct(form).subscribe(data => {
        console.log(data)
    }
    )
  }

}
