import { SettingDefault } from './../global/setting.default';
import { Setting } from './../entities/setting.entity';
import { isEmpty } from 'class-validator';
import { WinService } from './win.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SettingService {
  constructor(
    @InjectRepository(Setting) private readonly setting: Repository<Setting>,
    private winService: WinService
  ) {
    this.initSetting();
  }

  //`TODO: ` 初始化系统设置
  async initSetting() {
    const settings = await this.setting.count();

    //写入默认设置
    if (settings === 0) {
      SettingDefault.forEach((item) => this.setting.save(item));
    }
  }

  /**
   * 查询主题
   */
  async getTheme() {
    const themeSetting = await this.setting.findOne({ where: { name: 'theme' } });
    const msg = { type: 'theme', data: { operate: 'get', textValue: themeSetting.textValue } };

    if (!isEmpty(this.winService.indexWin)) this.winService.indexWin.webContents.send('re-setting', msg);
    if (!isEmpty(this.winService.settingWin)) this.winService.settingWin.webContents.send('re-setting', msg);
  }

  /**
   * 设置主题
   * @param msg
   */
  async setTheme(msg) {
    const { textValue } = msg.data;
    const themeSetting = await this.setting.findOne({ where: { name: 'theme' } });
    themeSetting.textValue = textValue;
    await this.setting.save(themeSetting);

    this.getTheme();
  }
}
