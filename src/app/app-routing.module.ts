import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/clients/client/client.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { AddServiceComponent } from './components/service/add-service/add-service.component';
import { SerivceComponent } from './components/service/serivce/serivce.component';
import { AccountComponent } from './components/account/account/account.component';
import { AddAccountComponent } from './components/account/add-account/add-account.component';
import { BillComponent } from './components/bill/bill/bill.component';
import { AddBillComponent } from './components/bill/add-bill/add-bill.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ClientComponent
  },
  {
    path: 'clientes', children:[
      {path: '', component: ClientComponent},
      {path: 'add-clientes', component: AddClientComponent},
    ]
  },
  {
    path: 'servicios', children:[
      {path: '', component: SerivceComponent},
      {path: 'add-servicios', component: AddServiceComponent},
    ]
  },
  {
    path: 'cuentas', children:[
      {path: '', component: AccountComponent},
      {path: 'add-cuentas', component: AddAccountComponent},
    ]
  },
  {
    path: 'facturas', children:[
      {path: '', component: BillComponent},
      {path: 'add-facturas', component: AddBillComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
