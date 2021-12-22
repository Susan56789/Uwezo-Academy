import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs';
import { GlobalData } from '../model/global-data';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor( private http: HttpClient) { }


  async getCourses(){
    const result = await this.http.get<any>('https://aqueous-fjord-24538.herokuapp.com/courses').pipe(
      map((res) => {
       // console.log(res);
        let rows = res.results;
        let re = JSON.stringify(rows)
        //let data = re.split('\n')
        let data =re.split(/},(?=\S)/);
        data.splice(0,1);

        let courses:GlobalData[]=[];
         
        let raw ={} as any;

      //  console.log(data);
        

        data.forEach(row =>{
          let cols = row.split(/(?=S)/);
          

          //console.log(cols);

          let order ={
            title:cols[2],
            url:cols[3],
            price:cols[5],
            headline:cols[22],
          }

          let temp: GlobalData = raw[order.title];

          if(temp){
            temp.price = order.price + temp.price;
            temp.headline = order.headline + temp.headline;
            temp.title = order.title + temp.title;
            temp.url = order.url + temp.url;

            raw[order.title] = temp;
          }
            else{
              raw[order.title] = order;
            }

        })
      //  console.log(raw);
        
      return Object.values(raw);
        
      })
    )
    return result;
    
  }




}
