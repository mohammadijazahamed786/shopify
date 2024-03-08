import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MangerhomepageComponent } from './mangerhomepage/mangerhomepage.component';
import { CustomerhomepageComponent } from './customerhomepage/customerhomepage.component';
import { FormsModule } from '@angular/forms';
import { SocialLoginModule, GoogleLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import{ HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ShirtComponent } from './shirt/shirt.component';
import { TShirtComponent } from './t-shirt/t-shirt.component';
import { PantsComponent } from './pants/pants.component';
import { JoggersComponent } from './joggers/joggers.component';
import { SuitComponent } from './suit/suit.component';
import { HoodieComponent } from './hoodie/hoodie.component';
import { JeansComponent } from './jeans/jeans.component';
import { TopsComponent } from './tops/tops.component';
import { KurtisComponent } from './kurtis/kurtis.component';
import { HalfsareeComponent } from './halfsaree/halfsaree.component';
import { SareesComponent } from './sarees/sarees.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { BoysComponent } from './boys/boys.component';
import { GirlsComponent } from './girls/girls.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { PantComponent } from './pant/pant.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { HoodiesComponent } from './hoodies/hoodies.component';
import { SuitsComponent } from './suits/suits.component';
import { JoggerComponent } from './jogger/jogger.component';
import { JeanssComponent } from './jeanss/jeanss.component';
import { KurtissComponent } from './kurtiss/kurtiss.component';
import { SareessComponent } from './sareess/sareess.component';
import { HalfsareessComponent } from './halfsareess/halfsareess.component';
import { TshirtssComponent } from './tshirtss/tshirtss.component';
import { TopComponent } from './top/top.component';


const googleClientId = '689809977817-sj56qqtgekbiusdlic29a85tmj9ad25m.apps.googleusercontent.com'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MangerhomepageComponent,
    CustomerhomepageComponent,
    RegisterComponent,
    ShowuserComponent,
    ProductComponent,
    DashboardComponent,
    ProfileComponent,
    ContactComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    CartComponent,
    PaymentComponent,
    ShirtComponent,
    TShirtComponent,
    PantsComponent,
    JoggersComponent,
    SuitComponent,
    HoodieComponent,
    JeansComponent,
    TopsComponent,
    KurtisComponent,
    HalfsareeComponent,
    SareesComponent,
    TShirtsComponent,
    BoysComponent,
    GirlsComponent,
    ShirtsComponent,
    PantComponent,
    TshirtsComponent,
    HoodiesComponent,
    SuitsComponent,
    JoggerComponent,
    JeanssComponent,
    KurtissComponent,
    SareessComponent,
    HalfsareessComponent,
    TshirtssComponent,
    TopComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('689809977817-sl1eudegi718kpm30uajjd6sqt28lrju.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
