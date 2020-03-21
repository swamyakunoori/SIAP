import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementsListService {

  constructor(private http: HttpClient) { }

  getAnnouncementsList(): Observable<any>{
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/announcement/AnnouncementListAPIView/';

      return this.http.get(url, { withCredentials: false })
  }
}
