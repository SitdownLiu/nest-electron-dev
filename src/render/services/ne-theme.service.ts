import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemeServiceInit, ThemeService } from 'ng-devui/theme';
import { infinityTheme, sweetTheme, provenceTheme, deepTheme, galaxyTheme } from 'ng-devui/theme-collection';
const { ipcRenderer } = window;

@Injectable({
  providedIn: 'root',
})
export class NeThemeService {
  @Output() globalThemeChange = new EventEmitter();

  themeList: any = { infinityTheme, sweetTheme, provenceTheme, deepTheme, galaxyTheme };
  themeService: ThemeService;
  themeOptions = [
    { name: '无限主题', value: 'infinityTheme' },
    { name: '蜜糖主题', value: 'sweetTheme' },
    { name: '紫罗兰主题', value: 'provenceTheme' },
    { name: '深邃夜空主题', value: 'deepTheme' },
    { name: '追光主题', value: 'galaxyTheme' },
  ];

  constructor() {
    this.themeService = ThemeServiceInit({ ...this.themeList });
  }

  OnInit(): void {
    this.toggleTheme('infinityTheme');
  }

  /**
   * 切换主题
   * @param theme
   * @returns
   */
  toggleTheme(theme: string, isSend?: boolean) {
    this.themeService.applyTheme(this.themeList[theme]);
    isSend ? ipcRenderer.invoke('setting', { type: 'theme', data: { status: theme } }) : '';
    return Promise.resolve(theme);
  }

  getOptions() {
    return this.themeOptions;
  }
}
