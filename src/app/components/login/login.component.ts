import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


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
  constructor(private formBuilder: FormBuilder, private handler: UserService, private router: Router) { }
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


// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';

// import { environment } from 'src/environments/environment';
// import { MatSnackBar } from '@angular/material';
// import { UserService } from 'src/app/service/user.service';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {

//   loginForm: FormGroup;
//   loading = false;
//   submitted = false;
//   returnUrl: string;
//   hide = true;

//   constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
//               private router: Router, private userService: UserService,
//               private httpUtil: UserService, private snackBar: MatSnackBar) {

//   }

// // tslint:disable-next-line: use-life-cycle-interface
//   ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//       emailId: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//   }

//   get f() { return this.loginForm.controls; }

//   onSubmit(user) {
//     this.submitted = true;
//     if (this.loginForm.invalid) {
//       return;
//     }
//     this.userService.login(user).subscribe(response => {
//       localStorage.setItem('token', response.headers.get('token'));
//       this.router.navigate(['/welcome/main-notes']);
//       this.snackBar.open('Successfully logged In', 'Ok', { duration: 2000 });
//     }, error => {
//       this.snackBar.open('error', 'please enter valid data', { duration: 2000 });
//     });
//   }
// }
