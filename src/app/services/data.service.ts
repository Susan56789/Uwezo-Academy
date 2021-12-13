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
    const result = this.http.get<any>('/api-2.0/courses/').pipe(
      map((res) => {
        console.log(res)
      }),
      tap((response) => {
        console.log(response)
      }),
      catchError(async (err) => this.handleHttpError),
    )

    return await result
  }
}
