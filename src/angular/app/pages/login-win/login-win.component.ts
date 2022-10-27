import { Component, OnInit } from '@angular/core';
import { FormLayout } from 'ng-devui/form';
import { faUser, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

const { ipcRenderer } = window;

@Component({
  selector: 'app-login-win',
  templateUrl: './login-win.component.html',
  styleUrls: ['./login-win.component.scss'],
})
export class LoginWinComponent implements OnInit {
  faUser = faUser;
  faUnlockKeyhole = faUnlockKeyhole;

  logoSrc = 'angular/assets/logo.png';
  formLayout: FormLayout = FormLayout.Horizontal;

  showPassword = false;

  formData = {
    account: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  //`TODO:` 登录
  submitLogin() {
    ipcRenderer.invoke('loginWin', { type: 'login', data: this.formData });
  }

  //关闭
  quitLoginWin() {
    ipcRenderer.invoke('loginWin', { type: 'quit' });
  }

  //最小化
  minimizeLoginWin() {
    ipcRenderer.invoke('loginWin', { type: 'minimize' });
  }
}
