import { Component, OnInit } from '@angular/core';
import { ThemeServiceInit, ThemeService } from 'ng-devui/theme';
import { infinityTheme, sweetTheme, provenceTheme, deepTheme, galaxyTheme } from 'ng-devui/theme-collection';

@Component({
  selector: 'app-ne-tools-theme',
  templateUrl: './ne-tools-theme.component.html',
  styleUrls: ['./ne-tools-theme.component.scss'],
})
export class NeToolsThemeComponent implements OnInit {
  themeList: any = { infinityTheme, sweetTheme, provenceTheme, deepTheme, galaxyTheme };
  themeService: ThemeService;

  activeTheme: string = 'infinityTheme';
  themeOptions = [
    { name: '无限主题', value: 'infinityTheme' },
    { name: '蜜糖主题', value: 'sweetTheme' },
    { name: '紫罗兰主题', value: 'provenceTheme' },
    { name: '深邃夜空主题', value: 'deepTheme' },
    { name: '追光主题', value: 'galaxyTheme' },
  ];
  popoverStyle = { backgroundColor: '', width: '160px' };

  constructor() {
    this.themeService = ThemeServiceInit({ ...this.themeList });
  }

  ngOnInit(): void {
    this.toggleTheme('infinityTheme');
  }

  toggleTheme(theme: string) {
    this.themeService.applyTheme(this.themeList[theme]);
    if (['infinityTheme', 'sweetTheme', 'provenceTheme', 'deepTheme'].indexOf(theme) > -1) {
      this.popoverStyle.backgroundColor = '#ffffff';
    } else {
      this.popoverStyle.backgroundColor = '';
    }
  }
}
