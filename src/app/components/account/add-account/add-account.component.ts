import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MyErrorStateMatcher } from '../../shared/MyErrorStateMatcher ';
import { Service } from 'src/app/model/service';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  accountForm: FormGroup;
  contrasenia = '';
  creacion = '';
  cuenta = '';
  pin = '';
  vencimiento = '';
  services = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  service: Service[] = [];

  constructor(private router: Router, private accountService: AccountService, private servicesService: ServicesService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.accountForm = this.formBuilder.group({
      contrasenia : [null, Validators.required],
      creacion : [null, Validators.required],
      cuenta : [null, Validators.required],
      pin : [null, Validators.required],
      vencimiento : [null, Validators.required],
      services : [null, Validators.required],
    });
    this.servicesService.getServices().subscribe((res: any) => {
      console.log(res)
      this.service = res;
      console.log(this.service);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    console.log(this.accountForm)
    this.accountService.addAccount(this.accountForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/cuentas']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
