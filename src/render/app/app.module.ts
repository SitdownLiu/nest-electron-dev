import { SettingWinModule } from './pages/setting-win/setting-win.module';
import { LoginWinModule } from './pages/login-win/login-win.module';
import { IndexWinModule } from './pages/index-win/index-win.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, IndexWinModule, LoginWinModule, SettingWinModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
