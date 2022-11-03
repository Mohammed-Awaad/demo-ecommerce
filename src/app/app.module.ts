import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './directives/light-box.directive';
import { USDToEGPPipe } from './pipes/usdto-egp.pipe';
import { OrderComponent } from './components/order/order.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { MainComponent } from './components/main/main.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductComponent,
    LightBoxDirective,
    USDToEGPPipe,
    OrderComponent,
    NotFoundComponent,
    UserLoginComponent,
    MainComponent,
    ProductDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
