import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient) { }

  getSettingsModules(): Observable<any>{
    let url = '';
    return this.http.get(url, { withCredentials: false })
  }

  getSettingsData(module): Observable<any>{
    if (module == 'Bands')
    {
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/chairman/BandListCreate/';
      return this.http.get(url, { withCredentials: false })
    }
    else if(module == 'Departments'){
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/chairman/DepartmentListCreate/'; 
      return this.http.get(url, { withCredentials: false })
    }
    else if(module == 'Designations'){
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/chairman/DesignationListCreate/';
      return this.http.get(url, { withCredentials: false })
    }
    else if(module == 'Subjects'){
      let url =  'http://niranjan-sia.herokuapp.com/api/v1/chairman/SubjectListCreate/';
      return this.http.get(url, { withCredentials: false })
    }
    else if(module == 'Courses'){
      let url =  'http://niranjan-sia.herokuapp.com/api/v1/chairman/CourseListCreate/';
      return this.http.get(url, { withCredentials: false })
    }
    else if(module == 'Universities'){
      let url =  'http://niranjan-sia.herokuapp.com/api/v1/chairman/UniversityListCreate/';
      return this.http.get(url, { withCredentials: false })
    }
    else if(module == 'Locations'){
      let url =  'http://niranjan-sia.herokuapp.com/api/v1/chairman/LocationListCreate/';
      return this.http.get(url, { withCredentials: false })
    }
    else if(module == 'States'){
      let url =  'http://niranjan-sia.herokuapp.com/api/v1/chairman/StateListCreate/';
      return this.http.get(url, { withCredentials: false })
    }
    else if(module == 'Semisters'){
      let url =  'http://niranjan-sia.herokuapp.com/api/v1/chairman/SemesterListCreate/';
      return this.http.get(url, { withCredentials: false })
    }
    else if(module == 'Shifts'){
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/chairman/ShiftListCreate/';
      return this.http.get(url, { withCredentials: false })
    }
    else if(module == 'Regulations'){
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/chairman/RegulationListCreate/';
      return this.http.get(url, { withCredentials: false })
    }
    else{
      let url = 'http://niranjan-sia.herokuapp.com/api/v1/chairman/BandListCreate/';
      return this.http.get(url, { withCredentials: false })

    }

  }
}
