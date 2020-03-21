import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewAlertsService {

  constructor(private http: HttpClient) { }

  getAlertsList(): Observable<any>{
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/announcement/AnnouncementListAPIView/';

      return this.http.get(url, { withCredentials: false })
  }
}
