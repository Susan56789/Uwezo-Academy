import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']


})
export class CoursesComponent implements OnInit {

courses: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
 this.courses = this.dataService.getCourses();
  }

}
