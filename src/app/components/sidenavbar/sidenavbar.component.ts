import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  @ViewChild('drawer') public drawer;
  @Input() public toggleSidebar: Subject<any>;
  @Input() public grid = false;
  constructor() { }

  ngOnInit() {
    this.toggleSidebar.subscribe(event => {
      if (this.drawer) {
        this.drawer.toggle();
      }
    });
  }
}
