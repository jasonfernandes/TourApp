import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-tour-package-all',
  templateUrl: './tour-package-all.component.html',
  styleUrls: ['./tour-package-all.component.css']
})
export class TourPackageAllComponent implements OnInit {

  packages:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response=this.http.get("http://localhost:9091/tourPackage");
    response.subscribe((data)=>this.packages=data)
  }
  newForm =new FormGroup({
    packageId:new FormControl(),
    basicFare:new FormControl(),
    source:new FormControl(),
    destination:new FormControl()

  })
  postit(){
    console.log(this.newForm.value);
    let {packageId,basicFare,source,destination}=this.newForm.value;
    if(packageId.length()!=7)
    alert("give correct size")
    else
     this.http.post<any>("http://localhost:9091/tourPackage",this.newForm.value)
    .subscribe((data: any)=>(console.log(data)))
  }
 

  

 

}


