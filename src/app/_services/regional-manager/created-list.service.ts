import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatedListService {

  constructor(private http: HttpClient) { }

  getCreatedProjectsList(): Observable<any>{
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/study/ProjectListCreateAPIView/';
      

      return this.http.get(url, { withCredentials: false })
  }
}
