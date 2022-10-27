import { menuBuilder, trayBuilder } from './../global/win.menus';
import { join } from 'path';
import { BrowserWindow, app, Menu } from 'electron';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class WinService {
  private loginWin;
  private indexWin;
  private tray;

  constructor(@Inject('IS_DEV') private readonly isDev, @Inject('MAIN_WIN') private readonly mainWin) {}

  /**
   * @登录窗口 --------------------------------------------------------------------------------
   */

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

  /**
   * @主窗口 --------------------------------------------------------------------------------
   */
  //`TODO:` 创建主窗口
  createIndexWin(token) {
    const URL = this.isDev ? `http://localhost:4200/#/IndexWin` : `file://${join(app.getAppPath(), 'dist/render/index.html#IndexWin')}`;

    this.indexWin = new BrowserWindow({
      minWidth: 1200,
      minHeight: 700,
      autoHideMenuBar: !this.isDev,
      icon: this.isDev ? 'build/icons/icon.ico' : `${process.cwd()}/resources/icons/icon.ico`,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        preload: join(__dirname, '../preload/index.js'),
        devTools: this.isDev,
      },
    });

    this.indexWin.loadURL(`${URL}?accessToken=${token}`);
    this.isDev ? Menu.setApplicationMenu(menuBuilder) : this.indexWin.removeMenu();
    this.tray = trayBuilder(this.indexWin);

    this.indexWin.on('closed', () => {
      this.indexWin.destroy();
      this.tray.destroy();
    });
  }
}
