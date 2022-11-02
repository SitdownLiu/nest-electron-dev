import { isEmpty } from 'class-validator';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionItemClickEvent } from 'ng-devui';

@Component({
  selector: 'app-ne-menus',
  templateUrl: './ne-menus.component.html',
  styleUrls: ['./ne-menus.component.scss'],
})
export class NeMenusComponent implements OnInit {
  @Input() menus: any[] = [];
  @Output() actived = new EventEmitter();

  logoSrc = 'render/assets/logo.png';

  subMenus = [];
  title = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.activedMenu();
  }

  /**
   * 切换主菜单
   * @param index
   */
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

  /**
   * 点击: 二级菜单
   * @param event
   */
  activedSubMenu(event: AccordionItemClickEvent) {
    const { item } = event;
    this.actived.emit(item);
  }
}
