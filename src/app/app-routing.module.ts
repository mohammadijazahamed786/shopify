import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { MangerhomepageComponent } from './mangerhomepage/mangerhomepage.component';
import { CustomerhomepageComponent } from './customerhomepage/customerhomepage.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { GirlsComponent } from './girls/girls.component';
import { BoysComponent } from './boys/boys.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { PantComponent } from './pant/pant.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { SuitsComponent } from './suits/suits.component';
import { JoggerComponent } from './jogger/jogger.component';
import { HoodiesComponent } from './hoodies/hoodies.component';
import { JeanssComponent } from './jeanss/jeanss.component';
import { KurtissComponent } from './kurtiss/kurtiss.component';
import { SareessComponent } from './sareess/sareess.component';
import { HalfsareessComponent } from './halfsareess/halfsareess.component';
import { TshirtssComponent } from './tshirtss/tshirtss.component';
import { TopComponent } from './top/top.component';



const routes: Routes = [{path:'',component:DashboardComponent},
                      {path:'login',component:LoginComponent},
                       {path:'register',component:RegisterComponent},
                       {path:'dashboard',component:DashboardComponent},
                       {path:'mangerhomepage',canActivate:[authGuard],component:MangerhomepageComponent},
                       {path:'profile',canActivate:[authGuard],component:ProfileComponent},
                       {path:'contact',canActivate:[authGuard],component:ContactComponent},
                       {path:'customerhomepage',canActivate:[authGuard],component:CustomerhomepageComponent},
                       {path:'showuser',canActivate:[authGuard],component:ShowuserComponent},
                       {path:'products',canActivate:[authGuard],component:ProductComponent},
                       {path:'men',component:MenComponent},
                       {path:'women',component:WomenComponent},
                       {path:'kids',component:KidsComponent},
                       {path:'cart',canActivate:[authGuard],component:CartComponent},
                       {path:'payment',canActivate:[authGuard],component:PaymentComponent},
                       {path:'shirts',component:ShirtComponent},//men
                       {path:'tshirts',component:TShirtComponent},
                       {path:'pants',component:PantsComponent},
                       {path:'joggers',component:JoggersComponent},
                       {path:'suits',component:SuitComponent},
                       {path:'hoodies',component:HoodieComponent},
                       {path:'jeans',component:JeansComponent},//women
                       {path:'tops',component:TopsComponent},
                       {path:'kurtis',component:KurtisComponent},
                       {path:'halfsarees',component:HalfsareeComponent},
                       {path:'sarees',component:SareesComponent},
                       {path:'tshirt',component:TShirtsComponent},
                       {path:'boys',component:BoysComponent},
                       {path:'girls',component:GirlsComponent},
                       {path:'shirt',component:ShirtsComponent},//boys
                       {path:'pant',component:PantComponent},
                       {path:'tshirtsss',component:TshirtsComponent},
                       {path:'suit',component:SuitsComponent},
                       {path:'jogger',component:JoggerComponent},
                       {path:'hoodie',component:HoodiesComponent},
                       {path:'jeanss',component:JeanssComponent},//girls
                       {path:'kurtiss',component:KurtissComponent},
                       {path:'sareess',component:SareessComponent},
                       {path:'halfsareess',component:HalfsareessComponent},
                       {path:'tshirtss',component:TshirtssComponent},
                       {path:'topss',component:TopComponent}

                      


                    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
