import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ne-tools-user',
  templateUrl: './ne-tools-user.component.html',
  styleUrls: ['./ne-tools-user.component.scss'],
})
export class NeToolsUserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onToggle(event: any) {
    console.log(event);
  }
}
