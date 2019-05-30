// import { Component, OnInit } from '@angular/core';
// import { Note } from 'src/app/model/note';
// import { NoteService } from 'src/app/service/note.service';
// import { UtilService } from 'src/app/service/util.service';
// import { MatSnackBar, MatDialog } from '@angular/material';


// @Component({
//   selector: 'app-archive-notes',
//   templateUrl: './archive-notes.component.html',
//   styleUrls: ['./archive-notes.component.scss']
// })
// export class ArchiveNotesComponent implements OnInit {
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
