import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor( private http: HttpClient) { }


  async getCourses(){
    const result = await this.http.get<string[]>('https://aqueous-fjord-24538.herokuapp.com/courses');
    
    return result;
  }




}
