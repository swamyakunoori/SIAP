import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtensionRequestsService {

  constructor(private http: HttpClient) { }

  getExtensionRequestsData(): Observable<any>{
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/regional/ProjectStatus/?status=CU';
      return this.http.get(url, { withCredentials: false })
  }
}
