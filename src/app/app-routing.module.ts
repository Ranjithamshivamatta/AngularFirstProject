import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
   {
    path: 'home',
   component: HomeComponent
   },
  // { path: 'forgot', component: ForgotpasswordComponent},
  // { path: 'note', component: NoteComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
// import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
// import { AuthGuard } from './gaurd/auth.guard';
// import { NoteComponent } from './components/note/note.component';
// import { TrashComponent } from './components/trash/trash.component';
// import { SearchNoteComponent } from './components/search-note/search-note.component';
// import { RemainderComponent } from './components/remainder/remainder.component';
// import { PasswordResetComponent } from './components/password-reset/password-reset.component';
// import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
// import { LabelsComponent } from './components/labels/labels.component';
// import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
// import { HomeComponent } from './components/home/home.component';


// const routes: Routes = [
//   {
//     path: 'login',
//     component: LoginComponent
//   },
//   {
//     path: 'register',
//     component: RegisterComponent
//   },
//   {
//     path: 'passwordforgot',
//     component: ForgotpasswordComponent
//   },
//   {
//     path: 'home',
//   component: HomeComponent
//   //   canActivate: [AuthGuard],
//   //   children: [
//   //     {
//   //       path: 'note',
//   //       component: NoteComponent
//   //     },
//   //     {
//   //       path: 'archive-notes',
//   //       component: ArchiveNotesComponent
//   //     },
//   //     {
//   //       path: 'trash',
//   //       component: TrashComponent
//   //     },
//   //     {
//   //       path: 'search-note',
//   //       component: SearchNoteComponent
//   //     },
//   //     {
//   //       path: 'remainder',
//   //       component: RemainderComponent
//   //     },
//   //     {
//   //       path: 'labels/:labelName',
//   //       component: LabelsComponent
//   //     },
//   //     {
//   //       path: '',
//   //       component: SidenavbarComponent
//   //     },
//   //     {
//   //       path: '',
//   //       redirectTo: 'note',
//   //       pathMatch: 'full'
//   //     }
//   //   ]
//   // },
//   // {
//   //   path: 'password-reset/:id',
//   //   component: PasswordResetComponent
//   },
//   {
//     path: '**',
//     redirectTo: 'login'
//   }];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
