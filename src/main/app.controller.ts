import { Controller, Inject } from '@nestjs/common';
import { BrowserWindow, WebContents } from 'electron';
import { WinService } from './services/win.service';
import { AppService } from './app.service';
import { IpcInvoke } from './transport';

@Controller()
export class AppController {
  webContents: WebContents = null;

  constructor(
    @Inject('MAIN_WIN') private readonly mainWin,
    private readonly appService: AppService,
    private readonly winService: WinService
  ) {
    const { webContents } = mainWin;
    this.webContents = webContents;

    this.appService.initWindow(); //初始化

    // 执行CallefdMFC: 客户端数据抓取上报
    // this.appService.openCallefdMFC();

    // 创建登录窗口
    // this.winService.createLoginWin();

    // 创建主窗口
    // this.winService.createIndexWin('12312312312');
  }

  @IpcInvoke('msg')
  public async handleSendMsg(msg: string): Promise<string> {
    console.log('msg', msg);
    this.webContents.send('reply-msg', msg);
    return `The main process received your message: ${msg} at time: ${this.appService.getTime()}`;
  }

  /**
   * 进程消息: 登录窗口
   * @param msg
   */
  @IpcInvoke('loginWin')
  public async handleLoginWin(msg) {
    const { type, data } = msg;

    switch (type) {
      case 'quit':
        this.winService.quitLoginWin();
        break;
      case 'minimize':
        this.winService.minimizeLoginWin();
        break;

      case 'login':
        const { account, password } = data;
        this.appService.login(account, password);
        break;

      case 'create':
        this.winService.createLoginWin();
        break;

      default:
        break;
    }
  }

  /**
   * 进程消息: 主窗口
   * @param msg
   */
  @IpcInvoke('indexWin')
  public async handleIndexWin(msg) {
    const { type, data } = msg;

    switch (type) {
      case 'quit':
        this.winService.quitIndexWin();
        break;

      default:
        break;
    }
  }

  /**
   * 进程消息: 系统设置窗口
   * @param msg
   */
  @IpcInvoke('settingWin')
  public async handleSettingWin(msg) {
    const { type, data } = msg;

    switch (type) {
      case 'create':
        const { status } = data;
        this.winService.createSettingWin(status);

        break;

      default:
        break;
    }
  }
}
