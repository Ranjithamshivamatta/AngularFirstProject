// import { Component, OnInit } from '@angular/core';
// import { NoteService } from 'src/app/service/note.service';
// import { UtilService } from 'src/app/service/util.service';
// import { Note } from 'src/app/model/note';
// import { MatSnackBar, MatDialog } from '@angular/material';

// @Component({
//   selector: 'app-remainder',
//   templateUrl: './remainder.component.html',
//   styleUrls: ['./remainder.component.scss']
// })
// export class RemainderComponent implements OnInit {
//   public notes: Note[] = [];
//   public grid = false;
//   public message = 'archive';

//   constructor(private noteService: NoteService, private snackBar: MatSnackBar,
//               public dialog: MatDialog, private helperService: UtilService) { }

//   ngOnInit() {
//     this.getNotes();
//     this.helperService.getTheme().subscribe((resp) =>
//       this.grid = resp
//     );
//     console.log(this.message);
//   }

//   public refresh() {
//     this.getNotes();
//   }

//   public onUpdateNote(data) {
//     this.updateMethod(data.note);
//   }

//   updateMethod(note) {
//     this.noteService.updateNote(note, note.noteId).subscribe(response => {
//       this.getNotes();
//     },
//       error => {
//         console.log('error');
//       });
//   }

//   public getNotes() {
//     this.noteService.retrieveNotes().subscribe(newNote => {
//       this.notes = newNote;
//     }, error => {
//       this.snackBar.open('error', 'error to retrieve notes', { duration: 2000 });
//     }
//     );
//   }

// }
