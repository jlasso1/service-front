import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../model/client';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const baseURL = 'http://localhost:8080/api/clientes';

@Injectable({
  providedIn: 'root'
})

export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client> {
    return this.http.get<Client>(baseURL);
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(baseURL, client, httpOptions);
  }
}
