import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatRadioModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import {MatButtonModule} from '@angular/material';
// import {MatRadioModule} from '@angular/material/radio';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';
// import { HomeComponent } from './components/home/home.component';
// import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
// import { HttpClientModule } from '@angular/common/http';
// import { MaterialModule } from './material/material.module';
// import { NoteComponent } from './components/note/note.component';
// import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
// // import { ImageComponent } from './components/image/image.component';

// import { AddNoteLabelsComponent } from './components/add-note-labels/add-note-labels.component';
// import { ArchiveNotesComponent } from './components/archive-notes/archive-notes.component';
// import { ChangeColorComponent } from './components/change-color/change-color.component';
// import { CollaboratorComponent } from './components/collaborator/collaborator.component';
// import { EditLabelsComponent } from './components/edit-labels/edit-labels.component';
// import { LabelsComponent } from './components/labels/labels.component';
// import { NotesearchBodyComponent } from './components/notesearch-body/notesearch-body.component';
// import { PasswordResetComponent } from './components/password-reset/password-reset.component';
// import { PinNoteComponent } from './components/pin-note/pin-note.component';
// import { RemainderComponent } from './components/remainder/remainder.component';
// import { SearchNoteComponent } from './components/search-note/search-note.component';
// import { TrashComponent } from './components/trash/trash.component';
// import { TrashDialogComponent } from './components/trash-dialog/trash-dialog.component';
// import { UpdatenoteComponent } from './components/update-note/update-note.component';

// import { NoteFilterPipe } from './pipe/note-filter.pipe';
// import { SearchPipe } from './pipe/search.pipe';
// import { SearchNotesPipe } from './pipe/search-note.pipe';
// import { SearchUserPipe } from './pipe/search-user.pipe';
// // import { AddImageComponent } from './components/add-image/add-image.component';
// import { DynamicHoverClassDirective } from './directive/dynamic-hover-class.directive';

// @NgModule({
//   declarations: [
//     AppComponent,
//     LoginComponent,
//     RegisterComponent,
//     HomeComponent,
//     ForgotpasswordComponent,
//     // NoteComponent,
//     // SidenavbarComponent,
//     // // ImageComponent,
//     // // AddImageComponent,
//     // AddNoteLabelsComponent,
//     // ArchiveNotesComponent,
//     // ChangeColorComponent,
//     // CollaboratorComponent,
//     // EditLabelsComponent,
//     // LabelsComponent,
//     // NotesearchBodyComponent,
//     // PasswordResetComponent,
//     // PinNoteComponent,
//     // RemainderComponent,
//     // SearchNoteComponent,
//     // TrashComponent,
//     // TrashDialogComponent,
//     // UpdatenoteComponent,
//     // DynamicHoverClassDirective,
//     // NoteFilterPipe,
//     // SearchPipe,
//     // SearchNotesPipe,
//     // SearchUserPipe
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule,
//     BrowserAnimationsModule,
//     MatButtonModule,
//     MatRadioModule,
//     ReactiveFormsModule,
//     AppRoutingModule,
//     FormsModule,
//     MaterialModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



// // import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
// // import { NgModule } from '@angular/core';

// // import { AppRoutingModule } from './app-routing.module';
// // import { AppComponent } from './app.component';
// // import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// // import { NoteFilterPipe } from './pipe/note-filter.pipe';
// // import { SearchPipe } from './pipe/search.pipe';



// // @NgModule({
// //   imports: [
// //     BrowserModule,
// //     AppRoutingModule,
// //     FormsModule,
// //     ReactiveFormsModule,
// //     AppMaterialModule,
// //     BrowserAnimationsModule
// //   ],
// //   exports: [
// //     FormsModule,
// //     ReactiveFormsModule,
// //     BrowserAnimationsModule
// //   ],
// //   declarations: [
// //     AppComponent,
// //     LoginComponent,
// //     RegisterComponent,
// //     HomeComponent,
// //     NotesearchBodyComponent,
// //     ForgotpasswordComponent,
// //     PasswordResetComponent,
// //     NoteComponent,
// //     UpdatenoteComponent,
// //     ArchiveNotesComponent,
// //     TrashComponent,
// //     TrashDialogComponent,
// //     PinNoteComponent,
// //     SidenavbarComponent,
// //     EditLabelsComponent,
// //     NoteFilterPipe,
// //     AddNoteLabelsComponent,
// //     SearchPipe,
// //     SearchNoteComponent,
// //     SearchNotesPipe,
// //     CollaboratorComponent,
// //     ImageComponent,
// //     SearchUserPipe,
// //     ChangeColorComponent,
// //     RemainderComponent,
// //     DynamicHoverClassDirective,
// //     LabelsComponent,
// //     AddImageComponent,
// //   ],
// //   entryComponents: [UpdatenoteComponent, TrashDialogComponent, EditLabelsComponent,
// //   CollaboratorComponent, ImageComponent],
// //   providers: [],
// //   bootstrap: [AppComponent]
// // })
// // export class AppModule {
// // }




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    // ForgotpasswordComponent,
    // NoteComponent,
    // SidenavbarComponent,
    // ImageComponent
  ],
  imports: [
    BrowserModule,
  BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatRadioModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
