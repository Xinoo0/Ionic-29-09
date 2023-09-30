import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiStateService {

  constructor(private http: HttpClient) { }

  
  getApi():Observable<any>{
    return this.http.get('https://<hostname>/api/vehicle/<id>');
  }
}
