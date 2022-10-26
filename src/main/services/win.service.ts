import { join } from 'path';
import { BrowserWindow, app } from 'electron';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class WinService {
  private loginWin;

  constructor(@Inject('IS_DEV') private readonly isDev, @Inject('MAIN_WIN') private readonly mainWin) {}

  //`TODO:` 创建登录窗口
  public createLoginWin() {
    const URL = this.isDev ? `http://localhost:4200/#/LoginWin` : `file://${join(app.getAppPath(), 'dist/render/index.html#LoginWin')}`;

    this.loginWin = new BrowserWindow({
      width: 460,
      height: 350,
      resizable: false,
      autoHideMenuBar: true,
      frame: false,
      transparent: true,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        preload: join(__dirname, '../preload/index.js'),
        devTools: this.isDev,
      },
    });

    this.loginWin.on('closed', () => {
      this.loginWin.destroy();
    });

    this.loginWin.loadURL(URL);
  }

  //`TODO:` 退出登录窗口
  public quitLoginWin() {
    this.loginWin.destroy();
  }
  //`TODO:` 最小化登录窗口
  public minimizeLoginWin() {
    this.loginWin.minimize();
  }
}
