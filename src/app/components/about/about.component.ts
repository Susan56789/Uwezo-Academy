import { Component, OnInit } from '@angular/core';
import { GlobalData } from 'src/app/model/global-data';
import { ReviewsService } from 'src/app/services/reviews.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  reviews: any;

  constructor(private reviewService: ReviewsService) { }

  async ngOnInit(): Promise<void> {

    await (await this.reviewService.getReviews()).subscribe({
      next: (result:any) =>{
        
        this.reviews = result;

       // console.log(result);
        return result;
      }
    })
  }

}
