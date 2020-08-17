import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { LoginselectComponent } from './loginselect/loginselect.component';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { BidderLoginComponent } from './bidder-login/bidder-login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewMarketComponent } from './view-market/view-market.component';
import { WelcomeFarmerComponent } from './welcome-farmer/welcome-farmer.component';
import { WelcomeBidderComponent } from './welcome-bidder/welcome-bidder.component';
import { SellHistoryComponent } from './sell-history/sell-history.component';
import { SellRequestComponent } from './sell-request/sell-request.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    // LoginselectComponent,
    FarmerLoginComponent,
    BidderLoginComponent,
    NotfoundComponent,
    ViewMarketComponent,
    WelcomeFarmerComponent,
    WelcomeBidderComponent,
    SellHistoryComponent,
    SellRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
