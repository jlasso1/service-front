import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../../shared/MyErrorStateMatcher ';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  clientForm: FormGroup;
  nombre = '';
  celular = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private clientService: ClientService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      nombre : [null, Validators.required],
      celular : [null, Validators.required],
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.clientService.addClient(this.clientForm.value)
      .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/clientes']);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
