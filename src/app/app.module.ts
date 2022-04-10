import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { InMemoryWebApiModule , HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AuthService} from './auth.service';
import { HeaderComponent } from './header/header.component'


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // InMemoryWebApiModule.forRoot(),
    HttpClientInMemoryWebApiModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      // { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
function InMemoryService(InMemoryService: any, arg1: { dataEncapsulation: false; }): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

