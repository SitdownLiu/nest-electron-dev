import { isEmpty } from 'class-validator';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { faGithub, faQq } from '@fortawesome/free-brands-svg-icons';
import { faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MenusModel } from './args.interface';

@Component({
  selector: 'app-index-win',
  templateUrl: './index-win.component.html',
  styleUrls: ['./index-win.component.scss'],
})
export class IndexWinComponent implements OnInit {
  faGithub = faGithub;
  faQq = faQq;
  faAt = faAt;
  faEnvelope = faEnvelope;

  logoSrc = 'render/assets/logo.png';
  menus: MenusModel[] = [
    {
      id: '1',
      title: '简介',
      icon: 'icon-base-info2',
      link: '/description',
    },
    {
      id: '2',
      title: '基础功能',
      icon: 'icon-more-func',
      children: [
        { id: '201', title: '窗口', icon: 'icon-copy-to-new', link: '/window' },
        { id: '202', title: '进程通信', icon: 'icon-depend', link: '/ipc-communication' },
      ],
    },
  ];

  tabs: MenusModel[] = [
    {
      id: '1',
      title: '简介',
      icon: 'icon-base-info2',
      link: '/description',
    },
  ];
  deleteTabIds: string[] = ['99'];
  tabActiveId: string | number = '1';

  constructor() {}

  ngOnInit(): void {}

  /**
   * 监听: 二级菜单
   * @param item
   */
  onActivedSubMenu(item: MenusModel) {
    const { id } = item;
    const tab = this.tabs.find((item) => item.id === id);
    isEmpty(tab) ? this.tabs.push(item) : '';
    this.deleteTabIds.push(id);
    this.deleteTabIds = Array.from(new Set(this.deleteTabIds));
    this.tabActiveId = id;
  }
}
