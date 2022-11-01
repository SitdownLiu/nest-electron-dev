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

  logoSrc = 'angular/assets/logo.png';
  menus = [
    {
      title: '简介',
      icon: 'icon-base-info2',
      link: '/description',
    },
    {
      title: '基础功能',
      icon: 'icon-more-func',
      children: [
        { title: '窗口', icon: 'icon-copy-to-new', link: '/window' },
        { title: '进程通信', icon: 'icon-depend', link: '/ipc-communication' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
