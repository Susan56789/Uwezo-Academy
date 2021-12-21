import {
  HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class DataService implements HttpInterceptor {

  constructor(private http: HttpClient) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequests = req.clone({
      headers: req.headers.set("Authorization","Basic WnNPY0txUnlhVU9WaWx4VFdCSE0yZGo2Uk5BUGdRM05BNzRMbUJlYTpYZlVZUXprazc3T2FmWFJ5bHVONW5RQ1hRNThGeHBtd1NYTE9HaXJQa0hDQ0lBT0N5aVRGYVZYV3htZ1V3YTBtQURab3drc2I4YzEzYVFrblNLWGlKS1ZWMUFqb2t3M3ZQNm13NTU5dXNIYXAxeU9oZFo2VHJQZERnUTlKanF1aA=="),
    });
    return next.handle(newRequests)
    //throw new Error('Method not implemented.');
  }

   async getCourses() {

const courseUrl="https://www.udemy.com//api-2.0/courses";


const headers = new HttpHeaders()
              .set("Authorization","Basic WnNPY0txUnlhVU9WaWx4VFdCSE0yZGo2Uk5BUGdRM05BNzRMbUJlYTpYZlVZUXprazc3T2FmWFJ5bHVONW5RQ1hRNThGeHBtd1NYTE9HaXJQa0hDQ0lBT0N5aVRGYVZYV3htZ1V3YTBtQURab3drc2I4YzEzYVFrblNLWGlKS1ZWMUFqb2t3M3ZQNm13NTU5dXNIYXAxeU9oZFo2VHJQZERnUTlKanF1aA==")
              .set("Content-Type","application/json, charset=utf-8")
              .set("Accept", "application/json, text/plain, */*");



    const result = await this.http.get<any>(courseUrl,{'headers':headers}).pipe(
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
