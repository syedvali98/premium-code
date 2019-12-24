import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremiumcalcComponent } from './premiumcalc/premiumcalc.component';
import { PreviewComponent } from './preview/preview.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  {path:'premium',component:PremiumcalcComponent},
  {path:'preview',component:PreviewComponent},
  {path:'payment',component:PaymentComponent},
  {path:'',redirectTo:'premium',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
