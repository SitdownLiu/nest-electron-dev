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
    userName: '',
    password: '',
  };

  constructor() {}

  ngOnInit(): void {}

  submitLogin() {}

  quitLoginWin() {
    ipcRenderer.invoke('loginWin', { type: 'quit' });
  }

  minimizeLoginWin() {
    ipcRenderer.invoke('loginWin', { type: 'minimize' });
  }
}
