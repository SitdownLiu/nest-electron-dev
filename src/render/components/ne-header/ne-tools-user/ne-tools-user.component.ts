import { Component, OnInit } from '@angular/core';
const { ipcRenderer } = window;
@Component({
  selector: 'app-ne-tools-user',
  templateUrl: './ne-tools-user.component.html',
  styleUrls: ['./ne-tools-user.component.scss'],
})
export class NeToolsUserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onToggle(event: any) {
    console.log(event);
  }

  //重新登录
  reLogin() {
    ipcRenderer.invoke('loginWin', { type: 'create' });
  }

  //关闭
  quitIndexWin() {
    ipcRenderer.invoke('indexWin', { type: 'quit' });
  }
}
