import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Companies } from '../models/companies.interface';
import { MaestroCompanies } from 'src/maestro-companies/maestro-companies.component';
import $ from "jquery";

@Component({
  selector: 'edit-companie',
  templateUrl: './edit-companie.component.html',
  styleUrls: ['./edit-companie.component.css']
})

export class EditCompanie implements OnInit{
    id = 0
    companieform;
    companies:Companies[];
  constructor(private http: HttpClient, private router:Router, private comp:MaestroCompanies) { 
  }

  ngOnInit(){
    $('.close').click(function (event) {
        $("#editModal").hide();    
        $("#editModal").css('background-color', '')  
    });
    $('#save-btn').click(function (event) {
      $("#editModal").hide();    
      $("#editModal").css('background-color', '')  
  });
    $('.btn-secondary').click(function (event) {
        $("#editModal").hide();   
        $("#editModal").css('background-color', '')  
    });
       this.companieform = new FormGroup({
        companieId: new FormControl(""),
        companieName: new FormControl(""),
        companieIdNumber: new FormControl(""),
        companieExpDate: new FormControl(""),
        companieContactName: new FormControl(""),
        companieContactEmail: new FormControl(""),
        companieIpAddress: new FormControl(""),
        companieLogo: new FormControl("")
     });

}
  getId(id){
    this.id = id
  }
  
  setEntity(data){
    this.comp.getData(data)
    }
  }
