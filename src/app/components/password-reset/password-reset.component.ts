
// import { Component, OnInit, Output, Input } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';

// import { MatSnackBar, MatDialog } from '@angular/material';
// import { EventEmitter } from '@angular/core';
// import { CollaboratorComponent } from '../collaborator/collaborator.component';
// import { UserService } from 'src/app/service/user.service';
// import { UtilService } from 'src/app/service/util.service';
// @Component({
//   selector: 'app-password-reset',
//   templateUrl: './password-reset.component.html',
//   styleUrls: ['./password-reset.component.scss']
// })
// export class PasswordResetComponent implements OnInit {

//   resetForm: FormGroup;
//   loading = false;
//   submitted = false;
//   public id = this.route.snapshot.params.id;

//   constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
//               private router: Router, private userService: UserService,
//               private httpUtil: UtilService, private snackBar: MatSnackBar) { }

//   ngOnInit() {
//     this.resetForm = this.formBuilder.group({
//       password: ['', [Validators.required, Validators.minLength(4)]],
//       confirmpassword: ['', [Validators.required, Validators.minLength(4)]]
//     });
//   }

//   get f() { return this.resetForm.controls; }

//   onSubmit(user) {
//     this.submitted = true;

//     if (this.resetForm.invalid) {
//       return;
//     }
// // tslint:disable-next-line: triple-equals
//     if (this.resetForm.value.password != this.resetForm.value.confirmpassword) {
//       this.snackBar.open('failed', 'both password should be same', {
//         duration: 2000
//       });
//       return;
//     }
//     console.log(user);
//     this.userService.resetPassword(user, this.id).subscribe(response => {
//       this.router.navigate(['/login']);
//       this.snackBar.open('sucess', 'password reset successfully', {
//         duration: 2000
//       });
//       console.log('reset successful', response);
//     },
//       error => {
//         this.snackBar.open('error', 'error to reset', { duration: 2000 });
//         console.log('error to reset', error);
//       }
//     );
//   }

// }
