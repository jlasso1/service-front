import { Client } from './client';

export class Bill {
    //_id: string;
    creacion: Date;
    valor: number;
    vencimiento: Date;
    client_id: Client;
    cuenta_id: Account;
  }