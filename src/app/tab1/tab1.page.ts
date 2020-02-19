import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  activityList: Observable<Activity[]>
  
  constructor(private activityService: ActivityService) {

    setTimeout(()=> {
      this.activityList = activityService.getAllActivities();

    }, 3000);


  }

}
