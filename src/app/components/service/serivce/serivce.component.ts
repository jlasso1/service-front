import { Component, OnInit } from '@angular/core';
import { Service } from '../../../model/service';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-serivce',
  templateUrl: './serivce.component.html',
  styleUrls: ['./serivce.component.css']
})
export class SerivceComponent implements OnInit {

  displayedColumns: string[] = ['cost', 'name'];
  data: Service[] = [];
  isLoadingResults = true;

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.servicesService.getServices().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
}
