import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { BillService } from '../../../services/bill.service';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../shared/MyErrorStateMatcher ';
import { Client } from 'src/app/model/client';
import { Account } from 'src/app/model/account';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent implements OnInit {

  billForm: FormGroup;
  cliente = '';
  cuenta = '';
  valor = '';
  creacion = '';
  vencimiento = '';
  pago = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  clients:Client[] = [];
  cuentas:Account[] = [];

  constructor(private router: Router, private accountService: AccountService, private clientService: ClientService, 
    private billService: BillService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.billForm = this.formBuilder.group({
      cliente : [null, Validators.required],
      creacion : [null, Validators.required],
      cuenta : [null, Validators.required],
      valor : [null, Validators.required],
      vencimiento : [null, Validators.required],
      pago : [null, Validators.required],
    });
    this.clientService.getClients().subscribe((res: any) => {
      this.clients = res;
      console.log(this.clients);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
    this.accountService.getAccount().subscribe((res: any) => {
      this.cuentas = res;
      console.log(this.cuentas);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });

  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.billService.addBill(this.billForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/facturas']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
