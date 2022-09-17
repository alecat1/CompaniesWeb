import { Component,OnInit } from '@angular/core';
import { Companies } from '../models/companies.interface';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit{
  navigationExtras: NavigationExtras
  companies:Companies[];
  rows: Companies[] = [];
  test: Companies
  idCompanie: Number[] = []
  load = false
  title = 'Maestro Productos';
  url = 'https://f56c0ao48b.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1/entities/';
  modal = false
  modalEdit = false
  constructor(private http: HttpClient, public router:Router) { }

  ngOnInit(){
    this.getAllProducts()
}
  getAllProducts(){
    let products_api 
    for(let i=1; i<=10; i++){
      products_api = this.url + i
      this.http.get<Companies[]>(products_api).subscribe(data => {
        this.test = {data: data}
        if(this.test != undefined){
          this.rows.push(this.test)
        }
      });
    }
    this.companies = this.rows
  }
  getCheckboxId(values:any):void {
    let id = values.currentTarget.id
    const queryParams: any = {};
    this.idCompanie.push(id)
    queryParams.idCompanie = JSON.stringify(this.idCompanie)
    this.navigationExtras= {
      queryParams
    };
  }
  loadComponent(){
    this.load = true
  }
}
