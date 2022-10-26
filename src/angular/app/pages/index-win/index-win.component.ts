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
  menu = [
    {
      title: '内容一',
      open: true,
      children: [{ title: '子内容1' }, { title: '子内容2' }, { title: '子内容3' }],
    },
    {
      title: '内容二',
      children: [{ title: '子内容1' }, { title: '子内容2' }, { title: '子内容3' }],
    },
    {
      title: '内容三（默认展开）',
      open: true,
      children: [{ title: '子内容1(禁用)', disabled: true }, { title: '子内容2(默认激活)', active: true }, { title: '子内容3' }],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
