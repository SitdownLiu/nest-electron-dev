import { WinService } from './services/win.service';
import { Auth } from './entities/auth.entity';
import { join } from 'path';
import { app, BrowserWindow } from 'electron';
import { Inject, Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { isEmpty } from 'class-validator';

@Injectable()
export class AppService {
  constructor(
    @Inject('IS_DEV') private readonly isDev,
    @InjectRepository(Auth)
    private readonly auth: Repository<Auth>,
    private readonly winService: WinService
  ) {}

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

  //`TODO:` 初始化
  async initWindow() {
    const [presentUser] = await this.auth.find({ where: { isPresent: true } });

    //IF: 没有当前用户
    if (isEmpty(presentUser)) return this.winService.createLoginWin();
    //IF: 当前用户授权已过有效期
    if (presentUser.expire <= new Date()) {
      this.auth.save({ ...presentUser, isPresent: false });
      return this.winService.createLoginWin();
    }

    // 创建主窗口
    this.winService.createIndexWin(presentUser.accessToken);
  }
}
