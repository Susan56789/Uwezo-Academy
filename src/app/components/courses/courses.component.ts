import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
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

 this.courses = this.dataService.getCourses().then(
  (data) => {
    this.courses = data;
    console.log(data)
    //return data;
  },
  (err: any)=>{
    console.log(err);
  }
)
  }
 


 }
