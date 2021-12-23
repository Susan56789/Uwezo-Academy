import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs';
import { GlobalData } from '../model/global-data';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }


  async getReviews(){
    return  await this.http.get<any>('https://fierce-bayou-79908.herokuapp.com/https://aqueous-fjord-24538.herokuapp.com/courses/reviews').pipe(
      map((res) => {
       // console.log(res);
        let rows = res.results;

        //let courses:GlobalData[]=[];
         
       // console.log(rows);

        return Object.values(rows)
        
      })    
        
    )}

}
