import { Component,NgModule,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { testid } from '../maestro-productos/maestro-productos.component';
import { NewProduct} from '../models/new-product.interface';
import { GetProduct} from '../models/get-product.interface';
import { PostI} from '../models/post.interface';
import $ from "jquery";
var global_id:string = ""

@Component({
  selector: 'edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})

export class EditProduct implements OnInit{
    editProductForm = new FormGroup({
        idProducto: new FormControl(''),
        codigoProducto: new FormControl(''),
        eanproducto: new FormControl(''),
        nombre: new FormControl(''),
        precio: new FormControl(''),
        idCategoriaProducto: new FormControl(''),
        })
    editProductFormById = new FormGroup({
        idProducto: new FormControl('0'),
        codigoProducto: new FormControl('string'),
        eanproducto: new FormControl('string'),
        nombre: new FormControl('string'),
        precio: new FormControl('0'),
        idCategoriaProducto: new FormControl('0'),
        })
    url = 'http://190.60.208.195:9192/api/Producto/';
  constructor(private http: HttpClient, private router:Router) { 
  }

  productData:GetProduct;
  ngOnInit(){
    $('.close').click(function (event) {
        $("#editModal").hide();    
        $("#editModal").css('background-color', '')  
       });
       $('.btn-secondary').click(function (event) {
           $("#editModal").hide();   
           $("#editModal").css('background-color', '')  
       });
}
  getProductById(form:GetProduct):Observable<GetProduct>{
    let products_api = this.url + 'ObtenerProducto';
    return this.http.post<GetProduct>(products_api,form);
  }
  postData1(id){
    global_id = id
    this.editProductFormById.setValue({
        'idProducto': id,
        'codigoProducto': 'string',
        'eanproducto': 'string',
        'nombre': 'string',
        'precio': '0',
        'idCategoriaProducto': '0',
     })
    this.getProductById(this.editProductFormById.value).subscribe(data =>{
     this.productData = data
     this.editProductForm.setValue({
        'idProducto': this.productData.idProducto,
        'codigoProducto': this.productData.codigoProducto,
        'eanproducto': this.productData.eanproducto,
        'nombre': this.productData.nombre,
        'precio': this.productData.precio,
        'idCategoriaProducto': this.productData.idCategoriaProducto,
     })
     $("#codigo_prod").val(this.editProductForm.value.codigoProducto)
     $("#ean_prod").val(this.editProductForm.value.eanproducto)
     $("#name_prod").val(this.editProductForm.value.nombre)
     $("#price_prod").val(this.editProductForm.value.precio)
     $("#cat_prod").val(this.editProductForm.value.idCategoriaProducto)
     this.getId(id)
    })
  }
  editProduct(form:GetProduct):Observable<PostI>{
    let products_api = this.url + 'ActualizarProducto'
    return this.http.post<PostI>(products_api,form);
  }
  getId(id){
    global_id = id
  }

  sendData(){
    var cod = $("#codigo_prod").val()
    var ean = $("#ean_prod").val()
    var name = $("#name_prod").val()
    var price = $("#price_prod").val()
    var cat = $("#cat_prod").val()
    var data = {
        'idProducto': global_id,
        'codigoProducto': cod,
        'eanproducto': ean,
        'nombre': name,
        'precio': price,
        'idCategoriaProducto': cat,
    }
    let products_api = this.url + 'ActualizarProducto'
    return this.http.post<PostI>(products_api,data);
  }

}
