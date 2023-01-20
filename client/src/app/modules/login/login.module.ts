import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginService } from './services/login.service';

const services = [LoginService];

const modeles = [
  CommonModule,
  LoginRoutingModule,
  SharedModule,
];

@NgModule({
  declarations: [LoginComponent],
  imports: [...modeles],
  providers: [...services]
})
export class LoginModule { }
