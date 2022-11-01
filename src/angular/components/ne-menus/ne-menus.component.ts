import { isEmpty } from 'class-validator';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ne-menus',
  templateUrl: './ne-menus.component.html',
  styleUrls: ['./ne-menus.component.scss'],
})
export class NeMenusComponent implements OnInit {
  @Input() menus: any = [];

  logoSrc = 'angular/assets/logo.png';

  subMenus = [];
  title = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.activedMenu();
  }

  activedMenu(index: number = 0) {
    this.menus.forEach((item: any, i: number) => {
      item.actived = i === index ? true : false;

      if (item.actived) {
        this.subMenus = isEmpty(item.children) ? [] : item.children;
        this.title = item.title;
        if (isEmpty(item.children)) this.router.navigate([item.link]);
      }
    });
  }
}
