import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ne-header',
  templateUrl: './ne-header.component.html',
  styleUrls: ['./ne-header.component.scss'],
})
export class NeHeaderComponent implements OnInit {
  @Input() menus: any[] = [];

  staticData: any[] = [];
  tabActiveId: string | number = 'tab1';
  wrappedActiveId: string | number = 'tab1';

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i < 50; i++) {
      this.staticData.push({
        id: `tab${i}`,
        title: `Tab${i}`,
        content: `Tab${i} Content`,
      });
    }
  }
}
