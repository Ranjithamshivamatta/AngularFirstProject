import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpHandlerService } from 'src/app/service/http-handler.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hide = true;
  constructor(private formBuilder: FormBuilder, private handler: HttpHandlerService, private router: Router) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  public onSubmit(user) {
    console.log('1');
    this.submitted = true;
    console.log('2');
    if (this.loginForm.invalid) {
      console.log('3');
      return;
    }
    this.handler.login(user).subscribe(res => {
      console.log('4');
      // console.log('res:', res);
      console.log('5');
      localStorage.setItem('token', res.headers.get('token'));
      if (localStorage.getItem('token') != null) {
        this.router.navigate(['/home']);
      }
    }, (error) => console.error(error));
  }
}

