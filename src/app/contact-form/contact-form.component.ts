import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  genders = [
    {id:1, name:"Male"},
    {id:2, name:"Female"}
  ];
  contactMethods = [
    {id:1, name:"Phone"},
    {id:2, name:"SMS"},
    {id:3, name:"EMail"}
  ];
  log(x) 
  {
    console.log(x);
  }
  
  submit(x) 
  {
    console.log(x);
  }
}
