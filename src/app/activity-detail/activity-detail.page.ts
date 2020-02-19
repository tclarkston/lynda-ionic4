import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityService } from '../activity.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ActivityVideoPage } from '../activity-video/activity-video.page';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {

  activityDetails: Observable<Activity>;
  
  constructor(
    private _modalController: ModalController,
    private activityService: ActivityService,
    private route: ActivatedRoute
    ) {
      const activityId = this.route.snapshot.params['activityID'];
      this.activityDetails = this.activityService.getActivity(activityId);
     }

  ngOnInit() {
  }

  async openModal(){
    const videoModal = await this._modalController.create({
        component: ActivityVideoPage
    });

    return await videoModal.present();
  }
}
