import { Menu, app, Tray } from 'electron';

export const menuBuilder = Menu.buildFromTemplate([
  {
    label: '开发工具',
    submenu: [
      { role: 'toggleDevTools' },
      { role: 'togglefullscreen' },
      { role: 'reload' },
      { label: 'Exit', accelerator: 'alt+F4', click: () => app.quit() },
    ],
  },
]);

export const trayBuilder = (win) => {
  const tray = new Tray('build/icons/icon.ico');
  const menus = Menu.buildFromTemplate([
    {
      role: 'minimize',
      label: '最小化',
      click: () => {
        win.minimize();
      },
    },
    {
      label: '退出',
      role: 'quit',
      click: () => {
        app.quit();
      },
    },
  ]);

  tray.setToolTip(app.name);
  tray.setContextMenu(menus);
  // tray.on('right-click', () => {
  //   tray.popUpContextMenu(menus);
  // });
  tray.on('click', (e, bounds) => {
    win.show();
  });
  return tray;
};
