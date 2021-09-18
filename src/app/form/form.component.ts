import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
userform: NgForm
formations= ['HTML', 'CSS','JAVASCRIPT']
  userFormModel: User;

hasError= true
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.userFormModel = new User('','', '', 6558887878,'default')
  }
validerFormation(value: any){
if(value=== 'default'){
  this.hasError=true
}else{
  this.hasError= false
}

}

onSubmit(){
this.userFormModel
}
}
