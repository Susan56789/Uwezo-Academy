import { Component, OnInit } from '@angular/core';
import { map, catchError } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']


})
export class CoursesComponent implements OnInit {

courses: any;

  constructor(private dataService: DataService) { }

  async ngOnInit() {

 this.courses = this.dataService.getCourses().pipe(
  map(
    res =>{
     console.log(res);

    }
  )
  )





  }
 }
