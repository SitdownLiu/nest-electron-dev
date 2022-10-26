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

    // 执行CallefdMFC: 客户端数据抓取上报
    // this.appService.openCallefdMFC();

    // 创建登录窗口
    // this.winService.createLoginWin();
  }

  @IpcInvoke('msg')
  public async handleSendMsg(msg: string): Promise<string> {
    console.log('msg', msg);
    this.webContents.send('reply-msg', msg);
    return `The main process received your message: ${msg} at time: ${this.appService.getTime()}`;
  }

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

      default:
        break;
    }
  }
}
