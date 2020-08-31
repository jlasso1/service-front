import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Account } from 'src/app/model/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  displayedColumns: string[] = ['account', 'contrasenia','pin','service','creat_at','vencimiento'];
  data: Account[] = [];
  isLoadingResults = true;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAccount().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}
