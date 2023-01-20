import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { tap } from 'rxjs';
import { LoginListModel } from './models/login-list.model';
import { LoginQueryModel } from './models/login-query.model';
import * as CanvasNest from '../../../assets/canvas/canvas-nest.js';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  userinfo!: LoginListModel;

  constructor(
    private readonly fb: FormBuilder,
    private readonly loginService: LoginService,
    private readonly router: Router,
    private readonly message: NzMessageService
  ) { }

  ngOnInit(): void {
    CanvasNest.fn();
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      account: [, Validators.required],
      password: [, Validators.required]
    })
  }

  login() {
    if (!this.form.valid) {
      Object.values(this.form.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    this.loginService
      .login({ username: this.form.value.account, password: this.form.value.password } as LoginQueryModel)
      .subscribe((data) => {
        localStorage.setItem("token", data.access_token);
        this.router.navigateByUrl('index');
      }, (error) => {
        this.message.error(`${error.error.message}`);
      });
  }

}
