import { FormLayout } from 'ng-devui/form';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting-base',
  templateUrl: './setting-base.component.html',
  styleUrls: ['./setting-base.component.scss'],
})
export class SettingBaseComponent implements OnInit {
  layoutDirection: FormLayout = FormLayout.Horizontal;

  constructor() {}

  ngOnInit(): void {}
}
