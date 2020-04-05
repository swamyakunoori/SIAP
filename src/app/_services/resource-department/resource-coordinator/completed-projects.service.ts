import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompletedProjectsService {

  constructor(private http: HttpClient) { }

  getcompletedProjectsList(): Observable<any>{
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/regional/ProjectStatus/?status=CO&department=resource';
      return this.http.get(url, { withCredentials: false })
  }

}
