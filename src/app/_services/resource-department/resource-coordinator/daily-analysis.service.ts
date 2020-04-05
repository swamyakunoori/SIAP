import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyAnalysisService {

  constructor(private http: HttpClient) { }

  getdailyAnalysisList(): Observable<any>{
      let url = 'http://niranjan-sia.herokuapp.com/';
      return this.http.get(url, { withCredentials: false })
  }

}
