import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const baseURL = 'http://localhost:8080/api/cuentas';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccount(): Observable<Account> {
    return this.http.get<Account>(baseURL);
  }

  addAccount(account: Account): Observable<Account> {
    return this.http.post<Account>(baseURL, account, httpOptions);
  }
}
