import { SettingMenusModel } from './setting.interface';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-setting-win',
  templateUrl: './setting-win.component.html',
  styleUrls: ['./setting-win.component.scss'],
})
export class SettingWinComponent implements OnInit {
  menus: SettingMenusModel[] = [
    {
      id: 1,
      status: 'base',
      title: '基础设置',
      icon: 'icon-base-info2',
    },
    {
      id: 2,
      status: 'theme',
      title: '主题设置',
      icon: 'icon-color',
    },
    {
      id: 3,
      status: 'account',
      title: '账户设置',
      icon: 'icon-op-member',
    },
    {
      id: 4,
      status: 'version',
      title: '版本说明',
      icon: 'icon-submit-earlier',
    },
    {
      id: 6,
      status: 'about',
      title: '关于我们',
      icon: 'icon-infomation',
    },
  ];

  actived: string = 'base';

  constructor(private titleService: Title, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.titleService.setTitle('系统设置');
    this.activatedRoute.queryParamMap.subscribe((queryParams: any) => {
      this.actived = queryParams.params.status;
    });
  }

  /**
   * 切换菜单
   * @param item
   */
  toggleMenuItem(item: SettingMenusModel) {
    const { status } = item;
    this.actived = status;
  }
}
