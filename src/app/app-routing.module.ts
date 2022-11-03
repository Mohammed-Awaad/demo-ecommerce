import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrderComponent } from './components/order/order.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

// First match wins strategy
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/orders', pathMatch: 'full' }, //Default Path
      { path: 'home', component: HomeComponent },
      { path: 'orders', component: OrderComponent },
      { path: 'products', component: ProductComponent },
      { path: 'products/:id', component: ProductDetailsComponent },
    ],
  },
  { path: 'login', component: UserLoginComponent },
  { path: '**', component: NotFoundComponent }, //Wild card path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
