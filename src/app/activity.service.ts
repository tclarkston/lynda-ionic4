import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(
    private http: HttpClient
  ) { }

  getActivity(activityID: string): Observable<Activity> {
     var activity = this.http.get<Activity>(API_URL + "/id/" + activityID);
      return activity;
  }

  getAllActivities(): Observable<Activity[]>{
    return this.http.get<Activity[]>(API_URL)
  }
}

const API_URL = "http://orangevalleycaa.org/api/videos";