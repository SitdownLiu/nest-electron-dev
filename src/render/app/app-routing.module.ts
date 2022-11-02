import { LoginWinComponent } from './pages/login-win/login-win.component';
import { NgModule } from '@angular/core';
import type { ExtraOptions, Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { IndexWinComponent } from './pages/index-win/index-win.component';

const routes: Routes = [
  {
    path: 'IndexWin',
    loadChildren: () => import('./pages/index-win/index-win.module').then((m) => m.IndexWinModule),
  },
  {
    path: 'LoginWin',
    component: LoginWinComponent,
  },
];
const config: ExtraOptions = { useHash: true };

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
