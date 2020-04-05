import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewprojectsService {

  constructor(private http: HttpClient) { }

  getNewProjectsData(): Observable<any>{
      
    let url = 'http://niranjan-sia.herokuapp.com/api/v1/regional/ProjectStatus/?status=CO&department=resource&type=N';
    return this.http.get(url, { withCredentials: false })
}

}
