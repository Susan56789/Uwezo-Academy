import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subject, takeUntil, tap } from 'rxjs';
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
  
    (await this.courseService.getCourses()).pipe(
      map((data)=>{
        console.log(data)
        return data
      })  
    ).subscribe((res: string[])=>{
      console.log(res);
      return res;
    }) ,
    takeUntil(this.closeActive)
  ];
  
  
console.log(this.courses);

  }

  ngOnDestroy(){
    this.closeActive.next();
    this.closeActive.complete();
  }

}
