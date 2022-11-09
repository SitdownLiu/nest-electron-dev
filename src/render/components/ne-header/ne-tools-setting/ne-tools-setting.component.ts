import { Component, OnInit } from '@angular/core';
const { ipcRenderer } = window;

@Component({
  selector: 'app-ne-tools-setting',
  templateUrl: './ne-tools-setting.component.html',
  styleUrls: ['./ne-tools-setting.component.scss'],
})
export class NeToolsSettingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // 打开系统设置窗口
  open() {
    ipcRenderer.invoke('settingWin', { type: 'create', data: { status: 'base' } });
  }
}
