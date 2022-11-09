import { FormLayout } from 'ng-devui/form';
import { NeThemeService } from './../../../../services/ne-theme.service';
import { Component, OnInit } from '@angular/core';
const { ipcRenderer } = window;

@Component({
  selector: 'app-setting-theme',
  templateUrl: './setting-theme.component.html',
  styleUrls: ['./setting-theme.component.scss'],
})
export class SettingThemeComponent implements OnInit {
  layoutDirection: FormLayout = FormLayout.Horizontal;

  activeTheme: string = 'infinityTheme';
  themeOptions: any[] = [];

  constructor(private neThemeService: NeThemeService) {
    this.themeOptions = neThemeService.getOptions();
  }

  ngOnInit(): void {
    this.toggleTheme('infinityTheme');

    ipcRenderer.on('re-setting', (event, msg) => {
      const { type, data } = msg;
      if (type === 'theme') this.toggleTheme(data.status);
    });
  }

  toggleTheme(theme: string, isSend?: boolean) {
    this.neThemeService.toggleTheme(theme, isSend);
  }
}
