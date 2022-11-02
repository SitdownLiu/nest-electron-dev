import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { faGithub, faQq } from '@fortawesome/free-brands-svg-icons';
import { faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
  menus = [
    {
      id: 1,
      title: '简介',
      icon: 'icon-base-info2',
      link: '/description',
    },
    {
      id: 2,
      title: '基础功能',
      icon: 'icon-more-func',
      children: [
        { id: 201, title: '窗口', icon: 'icon-copy-to-new', link: '/window' },
        { id: 202, title: '进程通信', icon: 'icon-depend', link: '/ipc-communication' },
      ],
    },
  ];

  tabs = [
    {
      id: 1,
      title: '简介',
      icon: 'icon-base-info2',
      link: '/description',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  /**
   * 监听: 二级菜单
   * @param item
   */
  onActivedSubMenu(item: any) {
    this.tabs.push(item);
  }
}
