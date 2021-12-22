import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, publish, Subject, takeUntil, tap } from 'rxjs';
import { GlobalData } from 'src/app/model/global-data';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit,OnDestroy {

  closeActive= new Subject<void>();

  constructor(private courseService:CoursesService) { }

  courses:GlobalData[]=[]

  async ngOnInit():Promise<void> {
  
  
    (await this.courseService.getCourses()).subscribe({
      next: (result:any) =>{
        
        this.courses = result;

        console.log(result);
        return result;
      }
    })

  }

  ngOnDestroy(){
    this.closeActive.next();
    this.closeActive.complete();
  }

}
