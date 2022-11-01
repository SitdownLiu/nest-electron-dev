import { IpcCommunicationComponent } from './ipc-communication/ipc-communication.component';
import { WindowComponent } from './window/window.component';
import { DescriptionComponent } from './description/description.component';
import { IndexWinComponent } from './index-win.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: IndexWinComponent,
    children: [
      {
        path: '',
        redirectTo: 'description',
        pathMatch: 'full',
      },
      {
        path: 'description',
        component: DescriptionComponent,
      },
      {
        path: 'window',
        component: WindowComponent,
      },
      {
        path: 'ipc-communication',
        component: IpcCommunicationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexWinRoutingModule {}
