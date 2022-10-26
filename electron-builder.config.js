/**
 * @type {import('electron-builder').Configuration}
 * @see https://www.electron.build/configuration/configuration
 */
const config = {
  productName: 'NE',
  appId: 'com.electron.ne',
  copyright: 'sitdown.liu',
  directories: {
    output: 'output',
  },
  // publish: [
  //   {
  //     provider: 'github',
  //     url: 'https://github.com/wallace5303/electron-egg',
  //   },
  // ],
  npmRebuild: false,
  buildDependenciesFromSource: true,
  electronDownload: {
    mirror: 'https://npm.taobao.org/mirrors/electron/',
  },
  asar: true,
  files: ['dist/**/*'],
  extraResources: {
    from: './build/extraResources/',
    to: 'extraResources',
  },
  nsis: {
    shortcutName: 'NE',
    oneClick: false,
    allowElevation: true,
    allowToChangeInstallationDirectory: true,
    createDesktopShortcut: true,
    createStartMenuShortcut: true,
    installerIcon: './build/icons/icon.ico',
    uninstallerIcon: './build/icons/icon.ico',
    installerHeaderIcon: './build/icons/icon.ico',
  },
  win: {
    icon: './build/icons/icon.png',
    artifactName: '${productName}-${os}-${version}-${arch}.${ext}',
    target: [
      {
        target: 'nsis',
        arch: 'ia32',
        // arch: 'x64',
        // arch: ['x64', 'ia32'], // 32 bit + 64 bit
      },
    ],
  },
};

module.exports = config;
