import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShopComponent } from './shop/shop.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'products',component:ProductsComponent},
  {path:'product/:id',component:ViewComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
