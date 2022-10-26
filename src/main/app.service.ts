import { join } from 'path';
import { app, BrowserWindow } from 'electron';
import { Inject, Injectable } from '@nestjs/common';
import { exec } from 'child_process';

@Injectable()
export class AppService {
  constructor(@Inject('IS_DEV') private readonly isDev) {}

  public getTime(): number {
    return new Date().getTime();
  }

  //`TODO:` 执行CallefdMFC: 客户端数据抓取上报
  public openCallefdMFC() {
    // const isDev = !app.isPackaged;
    const file = 'extraResources/win32Software/cmd.exe';
    const filePath = this.isDev ? `${process.cwd()}/build/${file}` : `${process.cwd()}/resources/${file}`;
    const cmdStr = `start ${filePath}`;
    exec(cmdStr);
  }
}
