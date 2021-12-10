import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpErrorResponse} from '@angular/common/http'
import { map, tap , catchError} from 'rxjs/operators';
import {Observable, throwError}  from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService implements HttpInterceptor {
 
   
  
  constructor(private http:HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');


  }

  courses ='https://www.udemy.com/api-2.0/courses/';

  
//cors anywhere: https://young-island-24679.herokuapp.com/

  //testAPI = 'https://jsonplaceholder.typicode.com/posts';
  


  headers = new HttpHeaders (
  
    {
            credentials: 'include', // include, *same-origin, omit
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            "Access-Control-Allow-Origin":"*",
      "Content-Type": "application/json, text/plain, */*",
      "X-Requested-With":"XMLHttpRequest",
    'Access-Control-Allow-Headers':'X-Requested-With, Content-Type',
    'Access-Control-Allow-Credentials':'true',
    "key":"x-api-key",
    "value":"WnNPY0txUnlhVU9WaWx4VFdCSE0yZGo2Uk5BUGdRM05BNzRMbUJlYTpYZlVZUXprazc3T2FmWFJ5bHVONW5RQ1hRNThGeHBtd1NYTE9HaXJQa0hDQ0lBT0N5aVRGYVZYV3htZ1V3YTBtQURab3drc2I4YzEzYVFrblNLWGlKS1ZWMUFqb2t3M3ZQNm13NTU5dXNIYXAxeU9oZFo2VHJQZERnUTlKanF1aA==",
   "Access-Control-Allow-Methods": "GET, DELETE, HEAD, OPTIONS",
   
    }
  );

  
//Accept: "application/json, text/plain, */*",
 //Authorization: "Basic WnNPY0txUnlhVU9WaWx4VFdCSE0yZGo2Uk5BUGdRM05BNzRMbUJlYTpYZlVZUXprazc3T2FmWFJ5bHVONW5RQ1hRNThGeHBtd1NYTE9HaXJQa0hDQ0lBT0N5aVRGYVZYV3htZ1V3YTBtQURab3drc2I4YzEzYVFrblNLWGlKS1ZWMUFqb2t3M3ZQNm13NTU5dXNIYXAxeU9oZFo2VHJQZERnUTlKanF1aA==",
 
 
  
  private handleHttpError(error : HttpErrorResponse){

  }
  
   async getCourses(): Promise<Observable<void | ((error: HttpErrorResponse) => void)>>{
     
    
  const result = this.http.get<any>(this.courses, {headers: this.headers} ).pipe(
      map(
        res =>{

         console.log(res);
  
        }
      ), tap(
        response =>{
          console.log(response)
        }
      ),
      catchError(async (err) => this.handleHttpError)
    )

    return await result;

  }
  
  

}

