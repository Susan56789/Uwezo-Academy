import {
  HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class DataService  {
  constructor(private http: HttpClient) {}


   async getCourses() {

const Options ={
  "Authorization":"Basic WnNPY0txUnlhVU9WaWx4VFdCSE0yZGo2Uk5BUGdRM05BNzRMbUJlYTpYZlVZUXprazc3T2FmWFJ5bHVONW5RQ1hRNThGeHBtd1NYTE9HaXJQa0hDQ0lBT0N5aVRGYVZYV3htZ1V3YTBtQURab3drc2I4YzEzYVFrblNLWGlKS1ZWMUFqb2t3M3ZQNm13NTU5dXNIYXAxeU9oZFo2VHJQZERnUTlKanF1aA==",
  "Content-Type":"application/json, charset=utf-8",
  'Access-Control-Allow-Origin': '*',
  "Accept": "application/json, text/plain, */*",
}

    const result = await this.http.get("http://localhost:8000/courses" , {headers: new HttpHeaders(Options)}).pipe(
      map((res) => {
        return res;
        //console.log(res)
      }),
      tap((response) => {
        return response;
      // console.log(response)
      }),
      catchError(async (err) => {
        console.log(err);
      }),
    )
    

return result;
  }
}
