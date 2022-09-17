import { Component,OnInit } from '@angular/core';
import { MainListComponent } from '../main-list/main-list.component';
import { HttpClient } from '@angular/common/http';
import { Companies } from '../models/companies.interface';
import { Router, ActivatedRoute } from '@angular/router';
declare var $: any;


@Component({
  selector: 'maestro-companies',
  templateUrl: './maestro-companies.component.html',
  styleUrls: ['./maestro-companies.component.css']
})

export class MaestroCompanies implements OnInit{
  url = 'https://f56c0ao48b.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/';
  modal = false
  modalEdit = false
  test: Companies
  companies:Companies[];
  rows: Companies[] = [];
  idCompanie: Number[] = []
  getId = ""
  idArray: String[] = []
  data;
  constructor(private http: HttpClient, private router:Router, private mainList: MainListComponent,private route: ActivatedRoute) { 
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.getId = params['idCompanie'];
  });
  this.splitId()
  this.getAllProducts()
}
splitId(){
  this.getId = this.getId.replace("[", "")
  this.getId = this.getId.replace("]", "")
  this.idArray = this.getId.split(",")
}
getAllProducts(){
  let products_api 
  for(let i=0; i<this.idArray.length; i++){
    let id0 = this.idArray[i].replace('"',"")
    let id = id0.replace('"',"")
    products_api = this.url + id
    this.http.get<Companies[]>(products_api).subscribe(data => {
      this.test = {data: data}
      if(this.test != undefined){
        this.rows.push(this.test)
      }
    }
  )}
  this.companies = this.rows
}
  createProduct(){
    $("#createModal").show();  
    $("#createModal").css('background-color', 'rgba(0, 0, 0, 0.5)')  
  }
  getData(data){
    this.data = data
    $("#sortTable tbody tr").each(function(index) {
      if(index == compId){
        if(data.companieName != ""){
          $("#companieName"+compId).html(data.companieName)
        }
        if(data.companieIdNumber != ""){
          $("#companieIdNumber"+compId).html(data.companieIdNumber)
        }
        if(data.companieExpDate != ""){
          $("#companieExpDate"+compId).html(data.companieExpDate)
        }
        if(data.companieContactName != ""){
          $("#companieContactName"+compId).html(data.companieContactName)
        }
        if(data.companieEmail != ""){
          $("#companieContactEmail"+compId).html(data.companieEmail)
        }
        if(data.companieIpAddress != ""){
          $("#companieIpAddress"+compId).html(data.companieIpAddress)
        }
        if(data.companieLogo != ""){
          $("#companieLogo"+compId).html(data.companieLogo)
        }
      
      }
  }) 
  }
  editProduct(id, data){
    var dat1 = data
    compId = id
    $("#editModal").show();  
    $("#editModal").css('background-color', 'rgba(0, 0, 0, 0.5)')  
    $("#companieName").val(dat1.data.name)
    $("#companieIdNumber").val(dat1.data.identificationNumber)
    $("#companieExpDate").val(dat1.data.expirationDate)
    $("#companieContactName").val(dat1.data.contactName)
    $("#companieContactEmail").val(dat1.data.contactMail)
    $("#companieIpAddress").val(dat1.data.ipAddress)
    $("#companieLogo").val(dat1.data.logo)
  }
  deleteFieldValue(index) {
    this.companies.splice(index, 1);
}

}
export var compId = 0