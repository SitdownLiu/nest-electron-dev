import { Module } from '@nestjs/common';
import { app } from 'electron';

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

        return app;
      },
      inject: ['IS_DEV'],
    },
  ],
  exports: ['MAIN_WIN'],
})
export class WinModule {}
