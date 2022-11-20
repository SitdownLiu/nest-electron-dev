export interface SettingMenusModel {
  id: number;
  title: string;
  status: string;
  icon: string;
  actived?: boolean;
}

export interface SettingItemModel {
  id?: number;
  type?: string;
  name: string;
  textValue?: string;
  statusValue?: boolean;
  serialValue?: string;
}

export interface BaseSettingModel {
  autoStart?: SettingItemModel;
  autoUpdate?: SettingItemModel;
  inform?: SettingItemModel;
  autoLogin?: SettingItemModel;
  closeEvent?: SettingItemModel;
}
