import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { LoginselectComponent } from './loginselect/loginselect.component';
// import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
// import { BidderLoginComponent } from './bidder-login/bidder-login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewMarketComponent } from './view-market/view-market.component';
import { SellRequestComponent} from './sell-request/sell-request.component';
import { WelcomeFarmerComponent } from './welcome-farmer/welcome-farmer.component';
import { SellHistoryComponent } from './sell-history/sell-history.component';
import { WelcomeBidderComponent } from './welcome-bidder/welcome-bidder.component';
import { ForgetComponent } from './forget/forget.component';
import { AboutComponent} from './about/about.component';
import { LoginFarmerComponent } from './login-farmer/login-farmer.component';
import { LoginBidderComponent } from './login-bidder/login-bidder.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import { BidderRegistrationComponent } from './bidder-registration/bidder-registration.component';
import { ContactComponent } from './contact/contact.component';
import { AdminApprovalComponent } from './admin-approval/admin-approval.component';
import { AdminApproveBidsComponent } from './admin-approve-bids/admin-approve-bids.component';
import { BidderDashboardComponent } from './bidder-dashboard/bidder-dashboard.component';
import { BidderHistoryComponent } from './bidder-history/bidder-history.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  // {path:'select',component:LoginselectComponent},
  {path: 'farmer-registration', component: FarmerRegistrationComponent},
  {path: 'bidder-registration', component: BidderRegistrationComponent},
  {path: 'market', component: ViewMarketComponent},
  {path: 'forget', component: ForgetComponent},
  {path: 'sell-request', component: SellRequestComponent},
  {path: 'welcome-farmer', component: WelcomeFarmerComponent},
  {path: 'welcome-bidder', component: WelcomeBidderComponent},
  {path: 'sell-history', component: SellHistoryComponent},
  {path: 'bidder-welcome', component: WelcomeBidderComponent},
  {path: 'bidder-dashboard', component: BidderDashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login-farmer', component: LoginFarmerComponent},
  {path: 'login-bidder', component: LoginBidderComponent},
  {path: 'admin-dash', component: AdminDashboardComponent},
  {path: 'admin-approve', component: AdminApprovalComponent},
  {path: 'admin-market', component: AdminApproveBidsComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'payment-gateway', component:PaymentGatewayComponent},
  {path: 'bidder-history', component:BidderHistoryComponent},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
