import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, publish, Subject, takeUntil, tap } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit,OnDestroy {

  closeActive= new Subject<void>();

  constructor(private courseService:CoursesService) { }

  courses:any;
  

  async ngOnInit(): Promise<void> {
  this.courses = [
  
   await (await this.courseService.getCourses()).pipe(
    map((res) => {
      console.log(res);
      return res;
    }),
    tap((response) => {
      console.log(response);
      return response;
     
    })
   )
  ]
  
console.log(this.courses);

  }

  ngOnDestroy(){
    this.closeActive.next();
    this.closeActive.complete();
  }

}
