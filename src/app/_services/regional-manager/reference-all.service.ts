import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferenceAllService {

  constructor(private http: HttpClient) { }

  getReferenceAllData(): Observable<any>{
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/performance/PerformanceListAPIView/';
      //dummy url, need to change it
      return this.http.get(url, { withCredentials: false })
  }
}
