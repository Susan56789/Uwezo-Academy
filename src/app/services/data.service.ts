import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
 
   headers = new HttpHeaders({
      Accept: "application/json, text/plain, */*",
      Authorization: 
      "Basic WnNPY0txUnlhVU9WaWx4VFdCSE0yZGo2Uk5BUGdRM05BNzRMbUJlYTpYZlVZUXprazc3T2FmWFJ5bHVONW5RQ1hRNThGeHBtd1NYTE9HaXJQa0hDQ0lBT0N5aVRGYVZYV3htZ1V3YTBtQURab3drc2I4YzEzYVFrblNLWGlKS1ZWMUFqb2t3M3ZQNm13NTU5dXNIYXAxeU9oZFo2VHJQZERnUTlKanF1aA==",
      "Content-Type": "application/json;charset=utf-8"
    })
  
      
  
  constructor(private http:HttpClient) { }


getCourses(){
return this.http
.get('https://www.udemy.com/api-2.0/courses', {headers: this.headers}).pipe(
    map(data => {
      //return data;
      console.log(data)
    })
    )
}



}
