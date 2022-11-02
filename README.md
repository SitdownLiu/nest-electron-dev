<img src="logo-ne.png" width="256" height="256" div align="center" />

# NE框架： NestJS + Electron  & Esbuild 

基于[NestJS](https://nestjs.com/)+[Electron](https://www.electronjs.org/)实现的桌面软件开发框架，让开发者能快速搭建一个使用Web技术开发桌面端应用软件的基础环境。

主进程是用esbuild构建的，主程序中集成了NestJS，并且基于NestJS集成了SQLite、LowDB等常用类库，让开发者可以像写NestJS后端一样编写自己的代码。

UI界面使用的Angular并集成了DevUI库，让开发者在编写UI界面时能使用与NestJS相同的语法，感觉这样的编码模式很酷。考虑到开发者的使用习惯，我也会延迟发布For Vue分支，同样集成DevUI库。

编译工具使用了更快速更轻量级的Vite，开发者可以使用“vite build”快速打包发布自己的应用程序。但遗憾的是目前[@angular/cli](https://github.com/angular/angular-cli.git)还未支持Vite，使用For Angular分支需要先"ng"再"vite"。但你不用担心，只要ngc一旦支持vite，本框架也会第一时间同步更新。For Vue不会受到上述影响。

## 环境要求

```basic
nodejs v16.x
npm v8.x
node-gyp v9.x
typescript >= v4.5.x <= v4.8.x
```



## 快速开始

- 直接克隆此仓库

  ```bash
  git clone https://gitee.com/sitdown-liu/nest-electron-dev.git
  ```

  

- For Angular: 
  
  ```basic
  # 安装依赖包
  yarn # npm install
  
  # 运行开发模式
  yarn dev:ng # npm run dev:ng
  yarn dev:ne # npm run dev:ne
  
  # 发布
  yarn build:ng # npm run build:ng
  yarn build:ne # npm run build:ne
  ```
  
- For Vue
  
  ```basic
  # 安装依赖包
  yarn # npm install
  
  # 运行开发模式
  yarn dev # npm run dev
  
  # 发布
  yarn build # npm run build
  ```

## 使用PNPM请注意

与`pnpm`一起使用，你需要调整你的`.npmrc

```bash
node-linker=hoisted
public-hoist-pattern=*
shamefully-hoist=true
```

## 常见问题

- SQLite3安装/编译失败

  使用electron开发桌面程序，sqlite编译最容易出错，你需要提前安装好Python2.7([下载地址](https://www.python.org/downloads/))和vs2015([下载地址](https://visualstudio.microsoft.com/zh-hans/downloads/))，然后执行以下操作：
  
  ```bash
  #安装Windows的相关环境
  npm install --global --production windows-build-tools
  
  #安装node-gyp
  npm install -g node-gyp
  
  #安装并构建兼容electron的sqlite
  npm install sqlite3 --build-from-source --runtime=electron --target=21.1.0 --dist-url=https://electronjs.org/headers
  ```
  
  如果安装失败也许是你所在的网段被墙了，你可以使用网络代理、国内镜像或cnpm。
  
  如果在`.\node_moudles\sqlite3\lib\binding\`下多了一个`electron-v3.1-win32-x64`文件夹，其下名为`‘node_sqlite3.node’`的文件就是electron所需要的sqlite文件，到这里就已经安装完成了。
  
  你也可以在[SQLite3 bindings for NodeJS](https://github.com/TryGhost/node-sqlite3)寻找其他解决方案。

