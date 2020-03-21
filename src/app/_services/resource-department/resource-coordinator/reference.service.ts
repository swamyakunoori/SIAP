import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor(private http: HttpClient) { }

  getReferenceData(): Observable<any>{
      
    let url = 'http://niranjan-sia.herokuapp.com/api/v1/regional/ProjectStatus/?status=CO&department=resource&type=O';
    return this.http.get(url, { withCredentials: false })
}

}
