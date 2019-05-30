// import { Component, OnInit, ViewChild, Input } from '@angular/core';
// import { Router } from '@angular/router';
// import { Subject } from 'rxjs';
// import { EditLabelsComponent } from '../edit-labels/edit-labels.component';
// import { Label } from 'src/app/model/label';
// import { NoteService } from 'src/app/service/note.service';
// import { MatSnackBar, MatDialog } from '@angular/material';
// import { UtilService } from 'src/app/service/util.service';


// @Component({
//   selector: 'app-sidenavbar',
//   templateUrl: './sidenavbar.component.html',
//   styleUrls: ['./sidenavbar.component.scss']
// })
// export class SidenavbarComponent implements OnInit {
//   @ViewChild('drawer') public drawer;
//   @Input() public toggleSidebar: Subject<any>;
//   @Input() public grid = false;

//   public labels: Label[] = [];

//   constructor(private router: Router, private noteService: NoteService, private snackBar: MatSnackBar,
//               public dialog: MatDialog, private helperService: UtilService) { }

//   ngOnInit() {
//     this.toggleSidebar.subscribe(event => {
//       if (this.drawer) {
//         this.drawer.toggle();
//       }
//     });
//     this.getLabels();
//   }

//   public navigateTo(path) {
//     this.router.navigate([path]);
//   }

//   editLabel(): void {
//     const dialogRef = this.dialog.open(EditLabelsComponent, {
//       width: '500px',
//       height: '250px',
//       data: ''
//     });
//     dialogRef.afterClosed().subscribe(result => {
//       this.getLabels();
//       console.log('The dialog was closed');
//     });
//   }

//   public getLabels() {
//     this.noteService.retrieveLabels().subscribe(newLabel => {
//       this.labels = newLabel;
//       // this.helperService.setLabels(newLabel);
//     }
//     );
//   }

//   notesWithList(label, path) {
//     this.router.navigate([path, label.labelName]);
//   }

// }
