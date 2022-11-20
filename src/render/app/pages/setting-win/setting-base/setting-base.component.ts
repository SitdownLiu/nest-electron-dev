import { SettingItemModel, BaseSettingModel } from './../setting.interface';
import { FormLayout } from 'ng-devui/form';
import { Component, OnInit } from '@angular/core';

const { ipcRenderer } = window;

@Component({
  selector: 'app-setting-base',
  templateUrl: './setting-base.component.html',
  styleUrls: ['./setting-base.component.scss'],
})
export class SettingBaseComponent implements OnInit {
  layoutDirection: FormLayout = FormLayout.Horizontal;

  statusValue = true;
  settings = {
    autoStart: { name: 'autoStart', statusValue: false },
    autoUpdate: { name: 'autoUpdate', statusValue: false },
    inform: { name: 'inform', statusValue: false },
    autoLogin: { name: 'autoLogin', statusValue: false },
    closeEvent: { name: 'closeEvent', textValue: 'quit' },
  };

  constructor() {}

  ngOnInit(): void {
    ipcRenderer.invoke('setting', { type: 'base', data: { operate: 'get' } });
    ipcRenderer.on('re-setting', (event, msg) => {
      const { type, data } = msg;
      if (type === 'base') {
        const { settings } = data;
        settings.forEach((item: SettingItemModel) => {
          const { name } = item;
          this.settings[name] = item;
        });
      }
    });
  }

  /**
   * 保存设置
   * @param event
   */
  async settingChange(event: any, name: string) {
    const setting = { ...this.settings[name] };
    name === 'closeEvent' ? (setting.textValue = event) : (setting.statusValue = event);

    await ipcRenderer.invoke('setting', { type: 'base', data: { operate: 'set', setting } });
  }
}
