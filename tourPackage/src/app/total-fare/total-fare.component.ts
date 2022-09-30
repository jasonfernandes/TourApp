import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-total-fare',
  templateUrl: './total-fare.component.html',
  styleUrls: ['./total-fare.component.css']
})
export class TotalFareComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  newFare =new FormGroup({
    source:new FormControl(),
    destination:new FormControl(),
    days:new FormControl()
  })
  getCost(){
    console.log(this.newFare.value);
    let {source,destination,days}=this.newFare.value;
    if(source==null||destination==null||days==null)
    alert("fill all fields")
    else
     this.http.get<any>(`http://localhost:9091/tourPackage/${source}/${destination}/${days}`)
    .subscribe((data)=>{console.log(data);
    alert("total fare is "+data)
     }, (error:any)=>{
    alert("Cannot find this package")
  })
  }
  

}
