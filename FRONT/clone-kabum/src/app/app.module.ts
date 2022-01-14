import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

/* Angular Material */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

/* Application Components */
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { DepartamentsSliderComponent } from './departaments-slider/departaments-slider.component';
import { BoxComponent } from './box/box.component';
import { FooterComponent } from './footer/footer.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyAccountComponent } from './my-account/my-account.component';

import { MyAccountSidenavComponent } from './my-account-sidenav/my-account-sidenav.component';
import { LoginService } from './Services/login.service';
import { AuthGuard } from './guards/auth.guard';
import { MyDataComponent } from './my-data/my-data.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    DepartamentsSliderComponent,
    BoxComponent,
    FooterComponent,
    ProdutoDetalheComponent,
    LoginComponent,
    PageNotFoundComponent,
    MyAccountComponent,
    MyAccountSidenavComponent,
    MyDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,

    MatSidenavModule,
    MatListModule,
    MatTooltipModule,

    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
