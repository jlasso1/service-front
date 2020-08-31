import { Component, OnInit } from '@angular/core';
import { BillService } from '../../../services/bill.service';
import { Account } from '../../../model/account';
import { Bill } from '../../../model/bill';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  displayedColumns: string[] = ['client', 'account','valor','creacion','vencimiento','pago'];
  data: Bill[] = [];
  isLoadingResults = true;

  pickerDate:Date;
  pickerDate2:Date;

  utility:number;

  constructor(private billService: BillService) { }

  ngOnInit(): void {
    this.seeBill();
  }

  seeBill(){
    this.billService.getBill().subscribe((res: any) => {
      this.data = res;
      this.isLoadingResults = false;
      this.utilidad();
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  utilidad():void{
    var valor = 0;
    var costo = 0;
    this.data.forEach(element =>{
      costo = element.cuenta.services.costo;
      valor = element.valor;
    });
    this.utility = valor - costo;
  }

  onSearch() {
    console.log(this.pickerDate)
    this.data = this.data.filter(elemento => {
      let ven = new Date(elemento.vencimiento);
      return ven >= this.pickerDate && ven <= this.pickerDate2;
    });    
    this.utilidad();
 }

 vencimiento(date1:Date, date2:Date):number{
  var res = 0;
  var d1 = new Date(date1);
  var d2 = new Date(date2);
  res = d1.getTime() - d2.getTime();
  return Math.round(res / (1000*60*60*24));
 }

}
