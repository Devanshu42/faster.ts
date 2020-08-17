import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { LoginselectComponent } from './loginselect/loginselect.component';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { BidderLoginComponent } from './bidder-login/bidder-login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewMarketComponent } from './view-market/view-market.component';
import { SellRequestComponent} from './sell-request/sell-request.component';
import { WelcomeFarmerComponent } from './welcome-farmer/welcome-farmer.component';
import { SellHistoryComponent } from './sell-history/sell-history.component';
import { WelcomeBidderComponent } from './welcome-bidder/welcome-bidder.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  // {path:'select',component:LoginselectComponent},
  {path:'farmer-login', component:FarmerLoginComponent},
  {path:'bidder-login', component:BidderLoginComponent},
  {path:'market', component:ViewMarketComponent},
  {path:'sell-request',component:SellRequestComponent},
  {path:'welcome-farmer', component:WelcomeFarmerComponent},
  {path:'sell-history', component:SellHistoryComponent},
  {path:'bidder-welcome', component:WelcomeBidderComponent},
  {path:'**',component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
