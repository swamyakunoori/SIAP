import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentProjectsService {

  constructor(private http: HttpClient) { }

  getCurrentProjects(): Observable<any>{
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/regional/ProjectStatus/?status=CU';
      return this.http.get(url, { withCredentials: false })
  }
}
