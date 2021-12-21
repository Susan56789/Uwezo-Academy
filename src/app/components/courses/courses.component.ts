import { Component, OnInit } from '@angular/core';
import { map, catchError, tap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']


})
export class CoursesComponent implements OnInit {

courses: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {

 this.courses = this.dataService.getCourses().then(res =>{res.pipe(
   map((data) =>{
     console.log(data);
     return data;
   }),
   tap((response) => {
    console.log(response);
    return response;
   
  }),
  catchError(async (err) => {
    console.log(err);
  }),
 )})

  }
 }
