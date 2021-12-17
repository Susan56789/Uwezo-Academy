import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class DataService implements HttpInterceptor {
  constructor(private http: HttpClient) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.')
  }

  private handleHttpError(error: HttpErrorResponse) {}

  async getCourses(): Promise<
    Observable<void | ((error: HttpErrorResponse) => void)>
  > {

    let headers = new HttpHeaders()
    headers.set('Access-Control-Allow-Origin', '*')
    headers.set("Accept", "application/json, text/plain, */*")
    headers.set("Authorization", "Basic WnNPY0txUnlhVU9WaWx4VFdCSE0yZGo2Uk5BUGdRM05BNzRMbUJlYTpYZlVZUXprazc3T2FmWFJ5bHVONW5RQ1hRNThGeHBtd1NYTE9HaXJQa0hDQ0lBT0N5aVRGYVZYV3htZ1V3YTBtQURab3drc2I4YzEzYVFrblNLWGlKS1ZWMUFqb2t3M3ZQNm13NTU5dXNIYXAxeU9oZFo2VHJQZERnUTlKanF1aA==")
    headers.set("Content-Type","application/json;charset=utf-8"),
    headers.set("Permissions-Policy", "interest-cohort =()")

    const result = this.http.get<any>('https:localhost:8000/api-2.0/courses/', {headers}).pipe(
      map((res) => {
       // return res;
        console.log(res)
      }),
      tap((response) => {
       // return response;
       console.log(response)
      }),
      catchError(async (err) => this.handleHttpError),
    )

    return await result
  }
}
