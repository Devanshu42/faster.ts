import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { LoginselectComponent } from './loginselect/loginselect.component';
// import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
// import { BidderLoginComponent } from './bidder-login/bidder-login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewMarketComponent } from './view-market/view-market.component';
import { WelcomeFarmerComponent } from './welcome-farmer/welcome-farmer.component';
import { WelcomeBidderComponent } from './welcome-bidder/welcome-bidder.component';
import { SellHistoryComponent } from './sell-history/sell-history.component';
import { SellRequestComponent } from './sell-request/sell-request.component';
import { AgGridModule } from 'ag-grid-angular';
import { ForgetComponent } from './forget/forget.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginBidderComponent } from './login-bidder/login-bidder.component';
import { LoginFarmerComponent } from './login-farmer/login-farmer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import { BidderRegistrationComponent } from './bidder-registration/bidder-registration.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { AdminApprovalComponent } from './admin-approval/admin-approval.component';
import { AdminAllFarmersComponent } from './admin-all-farmers/admin-all-farmers.component';
import { AdminAllBiddersComponent } from './admin-all-bidders/admin-all-bidders.component';
import { AdminApproveBidsComponent } from './admin-approve-bids/admin-approve-bids.component';
import { BidderDashboardComponent } from './bidder-dashboard/bidder-dashboard.component';
import { BidderHistoryComponent } from './bidder-history/bidder-history.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    // LoginselectComponent,
    // FarmerLoginComponent,
    // BidderLoginComponent,
    NotfoundComponent,
    ViewMarketComponent,
    WelcomeFarmerComponent,
    WelcomeBidderComponent,
    SellHistoryComponent,
    SellRequestComponent,
    ForgetComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LoginBidderComponent,
    LoginFarmerComponent,
    AdminDashboardComponent,
    FarmerRegistrationComponent,
    BidderRegistrationComponent,
    AdminApprovalComponent,
    AdminAllFarmersComponent,
    AdminAllBiddersComponent,
    AdminApproveBidsComponent,
    PaymentGatewayComponent,
    AdminApprovalComponent,
    BidderDashboardComponent,
    BidderHistoryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([])

  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
