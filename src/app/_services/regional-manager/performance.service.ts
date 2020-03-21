import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {

  constructor(private http: HttpClient) { }

  getEmployeesPerformanceData(): Observable<any>{
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/performance/PerformanceListAPIView/';
      //http://niranjan-sia.herokuapp.com/api/v1/performance/PerformanceRetrieveUpdateAPIView/
      return this.http.get(url, { withCredentials: false })
  }
}
