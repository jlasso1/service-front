import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../model/service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const baseURL = 'http://localhost:8080/api/services';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  getServices(): Observable<Service> {
    return this.http.get<Service>(baseURL);
  }

  addService(service: Service): Observable<Service> {
    return this.http.post<Service>(baseURL, service, httpOptions);
  }
}
