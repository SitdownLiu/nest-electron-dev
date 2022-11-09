import { NeThemeService } from './../../../services/ne-theme.service';
import { Component, OnInit } from '@angular/core';
const { ipcRenderer } = window;

@Component({
  selector: 'app-ne-tools-theme',
  templateUrl: './ne-tools-theme.component.html',
  styleUrls: ['./ne-tools-theme.component.scss'],
})
export class NeToolsThemeComponent implements OnInit {
  activeTheme: string = 'infinityTheme';
  themeOptions: any[] = [];
  popoverStyle = { backgroundColor: '', width: '160px' };

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
    this.neThemeService.toggleTheme(theme, isSend).then((theme) => {
      if (['infinityTheme', 'sweetTheme', 'provenceTheme', 'deepTheme'].indexOf(theme) > -1) {
        this.popoverStyle.backgroundColor = '#ffffff';
      } else {
        this.popoverStyle.backgroundColor = '';
      }
    });
  }
}
