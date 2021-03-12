import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Value } from '../Models/Value';

@Component({
  selector: 'app-Value',
  templateUrl: './Value.component.html',
  styleUrls: ['./Value.component.css']
})
export class ValueComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  values:Value[]=[];
  
  ngOnInit() {
    this.getValues().subscribe(data=>{
      this.values=data;
    })
  }
  
  getValues()
  {
    return this.httpClient.get<Value[]>("https://localhost:44328/api/values");   
  }

}
