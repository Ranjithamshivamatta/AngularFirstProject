// import { Component, OnInit, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
// import { Label } from 'src/app/model/label';
// import { NoteService } from 'src/app/service/note.service';

// @Component({
//   selector: 'app-edit-labels',
//   templateUrl: './edit-labels.component.html',
//   styleUrls: ['./edit-labels.component.scss']
// })
// export class EditLabelsComponent implements OnInit {

//   public labels: Label[] = [];

//   constructor(public dialogRef: MatDialogRef<EditLabelsComponent>,
//               @Inject(MAT_DIALOG_DATA) public data, private noteService: NoteService,
//               private snackBar: MatSnackBar) { }

//   ngOnInit() {
//     this.getLabels();
//   }

//   public getLabels() {
//     this.noteService.retrieveLabels().subscribe(newLabel => {
//       this.labels = newLabel;
//     }
//     );
//   }

//   public closeDailog() {
//     this.dialogRef.close();
//   }

//   public labelUpdate(label, labelName) {
//     const name = labelName.innerHTML;
//     if (name === '') {
//       return ;
//     }
//     console.log(name);
//     const newLabel = {
//       ...label,
//       labelName : name
//     };
//     this.noteService.updateLabel(newLabel, newLabel.labelId).subscribe(response => {
//       this.getLabels();
//       this.snackBar.open('label updated', 'Ok', { duration: 2000 });
//     }, error => {
//       this.snackBar.open('error', 'error to update labels', { duration: 2000 });
//     }
//     );
//   }

//   public labeldelete(label) {
//     this.noteService.deleteLabel(label.labelId).subscribe(response => {
//       this.getLabels();
//       this.snackBar.open('label deleted', 'Ok', { duration: 2000 });
//     }, error => {
//       this.snackBar.open('error', 'error to delete labels', { duration: 2000 });
//     }
//     );
//   }

//   public labelcreate(labelName) {
//     const name = labelName.innerHTML;
//     if (name === '') {
//       return ;
//     }
//     const label = {
//       labelName: name
//     };
//     this.noteService.createLabel(label).subscribe(response => {
//       this.getLabels();
//       this.snackBar.open('label created', 'Ok', { duration: 2000 });
//     }, error => {
//       this.snackBar.open('error', 'error to create labels', { duration: 2000 });
//     }
//     );
//   }
// }
