import { join } from 'path';
import { Module } from '@nestjs/common';
import { BrowserWindow, Menu, app } from 'electron';
import { menuBuilder, trayBuilder } from './win.menus';

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

@Module({
  providers: [
    {
      provide: 'MAIN_WIN',
      async useFactory(isDev: boolean) {
        app.on('window-all-closed', () => {
          if (process.platform !== 'darwin') app.quit();
        });

        if (isDev) {
          if (process.platform === 'win32') {
            process.on('message', (data) => {
              if (data === 'graceful-exit') app.quit();
            });
          } else {
            process.on('SIGTERM', () => {
              app.quit();
            });
          }
        }

        await app.whenReady();

        const win = new BrowserWindow({
          width: 1000,
          height: 700,
          autoHideMenuBar: !isDev,
          icon: 'build/icons/icon.ico',
          webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: join(__dirname, '../preload/index.js'),
            devTools: isDev,
          },
        });

        const URL = isDev ? `http://localhost:4200/#/IndexWin` : `file://${join(app.getAppPath(), 'dist/render/index.html#IndexWin')}`;

        win.loadURL(URL);
        // win.hide();

        if (isDev) Menu.setApplicationMenu(menuBuilder);
        else win.removeMenu();

        const tray = trayBuilder(win);

        win.on('closed', () => {
          win.destroy();
          tray.destroy();
        });

        return { win, tray };
      },
      inject: ['IS_DEV'],
    },
  ],
  exports: ['MAIN_WIN'],
})
export class WinModule {}
