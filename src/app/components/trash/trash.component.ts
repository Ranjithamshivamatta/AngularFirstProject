// import { Component, OnInit } from '@angular/core';
// import { Note } from 'src/app/model/note';
// import { NoteService } from 'src/app/service/note.service';
// import { MatSnackBar, MatDialog } from '@angular/material';
// import { UtilService } from 'src/app/service/util.service';
// import { TrashDialogComponent } from '../trash-dialog/trash-dialog.component';


// @Component({
//   selector: 'app-trash',
//   templateUrl: './trash.component.html',
//   styleUrls: ['./trash.component.scss']
// })
// export class TrashComponent implements OnInit {

//   public notes: Note[] = [];
//   public grid = false;

//   constructor(private noteService: NoteService, private snackBar: MatSnackBar,
//               public dialog: MatDialog, private helperService: UtilService) { }

//   ngOnInit() {
//     this.getNotes();
//     this.helperService.getTheme().subscribe((resp) =>
//       this.grid = resp
//     );
//   }

//   getNotes() {
//     this.noteService.retrieveNotes().subscribe(newNote => {
//       this.notes = newNote;
//     }, () => {
//       this.snackBar.open('error', 'error to retrieve notes', { duration: 2000 });
//     }
//     );
//   }

//   openDialog(note): void {
//     const dialogRef = this.dialog.open(TrashDialogComponent, {
//       width: '500px',
//       data: note
//     });
//     dialogRef.afterClosed().subscribe(() => {
//       this.getNotes();
//       console.log('The dialog was closed');
//     });
//   }

//   deleteNote(note) {
//     console.log(note.noteId);
//     this.noteService.deleteNote(note.noteId).subscribe(() => {
//       this.snackBar.open('deleted Note', 'OK', { duration: 2000 });
//       this.getNotes();
// // tslint:disable-next-line: no-unused-expression
//     }), () => {
//       this.snackBar.open('error to delete notes', 'error', { duration: 2000 });
//     };
//   }

//   restore(note) {
//     note.inTrash = 0;
//     console.log(note);
//     this.noteService.updateNote(note, note.noteId).subscribe(response => {
//       console.log(response);
//       this.snackBar.open('Restored', 'Ok', { duration: 2000 });
//       this.getNotes();
//     },
//       () => {
//         console.log('error');
//       });
//   }

// }
