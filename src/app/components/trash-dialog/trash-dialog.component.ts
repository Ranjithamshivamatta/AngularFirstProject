// import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
// import { NoteService } from 'src/app/service/note.service';
// import { Note } from 'src/app/model/note';

// @Component({
//   selector: 'app-trash-dialog',
//   templateUrl: './trash-dialog.component.html',
//   styleUrls: ['./trash-dialog.component.scss']
// })
// export class TrashDialogComponent implements OnInit {

//   constructor(public dialogRef: MatDialogRef<TrashDialogComponent>,
//               @Inject(MAT_DIALOG_DATA) public note: Note, private noteService: NoteService,
//               private snackBar: MatSnackBar) { }

//   ngOnInit() {
//   }
//   deleteNote(note) {
//     this.noteService.deleteNote(note.noteId).subscribe(() => {
//       this.snackBar.open('deleted Note', 'OK', { duration: 2000 });
// // tslint:disable-next-line: no-unused-expression
//     }), () => {
//       this.snackBar.open('error to delete note', 'error', { duration: 2000 });
//     };
//   }

//   restore(note) {
//     note.inTrash = 0;
//     this.noteService.updateNote(note, note.noteId).subscribe(response => {
//       console.log(response);
//       this.snackBar.open('Restored', 'Ok', { duration: 2000 });
//     },
//       () => {
//         console.log('error');
//       });
//   }

// }

