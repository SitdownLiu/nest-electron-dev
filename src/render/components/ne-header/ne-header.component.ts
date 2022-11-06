import { Router } from '@angular/router';
import { MenusModel } from './../../app/pages/index-win/args.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ne-header',
  templateUrl: './ne-header.component.html',
  styleUrls: ['./ne-header.component.scss'],
})
export class NeHeaderComponent implements OnInit {
  @Input() tabs: MenusModel[] = [];
  @Input() deleteTabIds: string[] = [];
  @Input() tabActiveId: string | number = '1';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  /**
   * 删除tab
   * @param event
   * @param type
   */
  async deleteTab(event: any, type: string) {
    const { id } = event;
    let index = 0;
    await this.tabs.forEach((item, i) => (item.id === id ? (index = i) : ''));
    await this.tabs.splice(index, 1);
    if (id === this.tabActiveId) {
      this.tabActiveId = this.tabs[this.tabs.length - 1].id;
      this.router.navigate([this.tabs[this.tabs.length - 1].link]);
    }
  }

  activeTabChange(id: any) {
    this.tabs.forEach((item) => {
      if (item.id === id) this.router.navigate([item.link]);
    });
  }
}
