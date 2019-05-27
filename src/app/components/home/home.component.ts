import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public toggleNav: Subject<any> = new Subject();
  constructor() { }

  ngOnInit() {
  }
  public toggle() {
    this.toggleNav.next();
    console.log(this.toggleNav);
  }
}
