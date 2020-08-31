import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Bill } from '../model/bill';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const baseURL = 'http://localhost:8080/api/facturas';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient) { }

  getBill(): Observable<Bill> {
    return this.http.get<Bill>(baseURL);
  }

  addBill(bill: Bill): Observable<Bill> {
    return this.http.post<Bill>(baseURL, bill, httpOptions);
  }
}
