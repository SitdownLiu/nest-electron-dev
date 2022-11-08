import { isEmpty } from 'class-validator';
import { menuBuilder } from './../global/win.menus';
import { join } from 'path';
import { BrowserWindow, app, Menu, Tray } from 'electron';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class WinService {
  private loginWin;
  private indexWin;
  private tray;
  private settingWin;

  constructor(@Inject('IS_DEV') private readonly isDev, @Inject('MAIN_WIN') private readonly mainWin) {}

  /**
   * @登录窗口 --------------------------------------------------------------------------------
   */

  //`TODO:` 创建登录窗口
  public createLoginWin() {
    if (!isEmpty(this.loginWin)) this.loginWin.destroy();
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
  // 系统托盘
  private trayBuilder() {
    const icon = this.isDev ? 'build/icons/icon.ico' : `${process.cwd()}/resources/icons/icon.ico`;
    const tray = new Tray(icon);
    const menus = Menu.buildFromTemplate([
      {
        label: '重新登录',
        click: () => {
          this.createLoginWin();
        },
      },
      {
        role: 'minimize',
        label: '最小化',
        click: () => {
          this.indexWin.minimize();
        },
      },
      {
        role: 'quit',
        label: '退出',
        click: () => {
          app.quit();
        },
      },
    ]);

    tray.setToolTip(app.name);
    tray.setContextMenu(menus);

    tray.on('click', (e, bounds) => {
      this.indexWin.show();
    });
    return tray;
  }

  //`TODO:` 创建主窗口
  public createIndexWin(token) {
    this.quitIndexWin();

    const URL = this.isDev ? `http://localhost:4200/#/IndexWin` : `file://${join(app.getAppPath(), 'dist/render/index.html#IndexWin')}`;
    const icon = this.isDev ? 'build/icons/icon.ico' : `${process.cwd()}/resources/icons/icon.ico`;

    this.indexWin = new BrowserWindow({
      minWidth: 1200,
      minHeight: 700,
      autoHideMenuBar: !this.isDev,
      icon: icon,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        preload: join(__dirname, '../preload/index.js'),
        devTools: this.isDev,
      },
    });

    this.indexWin.loadURL(`${URL}?accessToken=${token}`);
    this.isDev ? Menu.setApplicationMenu(menuBuilder) : this.indexWin.removeMenu();
    this.tray = this.trayBuilder();

    this.indexWin.on('closed', () => {
      this.indexWin.destroy();
      this.tray.destroy();
    });

    this.tray.on('minimize', () => {
      console.log('123');
    });
  }

  //`TODO:` 关闭主窗口
  public quitIndexWin() {
    if (!isEmpty(this.indexWin)) {
      this.indexWin.destroy();
      this.tray.destroy();
    }
  }
  /**
   * @系统设置窗口 --------------------------------------------------------------------------------
   */
  //`TODO:` 创建设置窗口
}
