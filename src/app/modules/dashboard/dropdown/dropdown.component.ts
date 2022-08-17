import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/layouts/auth/services/auth.service';
export class Employee{
  constructor(
    public id:number,
    public name:string,
  ){}
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  states=[ {name: 'Arizona', abbrev: 'AZ'},
  {name: 'California', abbrev: 'CA'},
  {name: 'Colorado', abbrev: 'CO'},
  {name: 'New York', abbrev: 'NY'},
  {name: 'Pennsylvania', abbrev: 'PA'}];
employeelist:any;
employee:Employee[];
  constructor(
 private authService:AuthService,  
private http:HttpClient
  ) {
  
  }
  ChangeDepartment(e:any)
  {
    console.log(e.target.value);
  }
  ngOnInit(): void {
this.getdata();


this.authService.getdrop().subscribe((data:any)=>{
  this.employee=data;
  console.log(this.employee);

});



  }
  dropdowndata()
  {
    this.authService.getdropdowndata(this.employee).subscribe((data:any)=>{
      this.employeelist=data;
      console.log(this.employeelist);
    
    });
   // get.authService.getdropdowndata();
    //this.authService.getdropdowndata();
    console.log("here s " +this.employee);
}
getdata()
{
  this.http.get<any>('https://gorest.co.in/public/v2/use').subscribe(response=>{console.log(response);this.employee=response})
}
}