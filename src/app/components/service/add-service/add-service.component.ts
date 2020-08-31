import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../shared/MyErrorStateMatcher ';
import { ServicesService } from '../../../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  serviceFrom: FormGroup;
  costo = '';
  nombre = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private servicesService: ServicesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.serviceFrom = this.formBuilder.group({
      costo : [null, Validators.required],
      nombre : [null, Validators.required],
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.servicesService.addService(this.serviceFrom.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/servicios']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
