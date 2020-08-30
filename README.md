# scratch-cn.lite 在线编程平台
=============================================

### 介绍
    scratch-cn.lite 是一个轻量级的Scratch在线编程、分享平台

### 功能模块：
1. 注册登录；
2. Scratch创作；
3. 作品管理；
4. 用户管理；
5. 个人信息管理；
6. 作品播放、点赞、收藏、分享。
7. [其他扩展功能请参考网站：www.comecode.net](https://www.comecode.net)

### 平台构架技术说明：
1. 前端：Layui 框架；
2. 后端：NodeJS + MySQL；
3. 框架、结构简单清晰，整个版本极易上手；
4. 轻松支撑百万量级用户。

### 开发环境搭建所需要工具（以Windows为例）：
- git：用于下载源代码（源代码也可直接下载:https://gitee.com/scratch-cn/lite/repository/archive/master.zip）
- NodeJS：平台运行的服务器（下载地址：http://nodejs.cn/download/）
- MySQL：用户信息、作品保存地（下载地址：https://dev.mysql.com/downloads/mysql/）
- Python：编译源代码工具之一（下载地址：https://www.python.org/downloads/release）
- VS Code：源代码开发工具，作者推荐（下载地址：https://code.visualstudio.com/download）

### 源代码获取及运行
1. git 版本源代码：git clone --depth=1 https://gitee.com/scratch-cn/lite.git
- 源代码也可直接下载:https://gitee.com/scratch-cn/lite/repository/archive/master.zip

2. 在源代码目录下，直接运行：npm run start
- 开源版本中，已包含了Scratch所需的全部资源，无需依赖其他平台
- 开源版本中，已包含了所需的node_modules包
- 如万一发现有依赖包不全，请执行：npm install XXX（XXX为包名）

### 目录说明：

```
lite                            # scratch-cn.lite 目录
├── build                       # Client端文件夹:网页、JS、CSS、IMG
│   ├── css                     #CSS库
│   ├── ejs                     #系统前端文件
│   ├── img                     #IMG库
│   ├── js                      #JS库
│   ├── layui                   #LayUI模块：前端框架
│   ├── scratch                 #scratch编辑器资源文件夹
│ 
├── data                        #所有用户上传的文件
│   ├── material                #scratch作品的素材库
│   ├── scratch_slt             #所有scratch项目的缩略图
│   ├── upload_tmp              #所有上传文件的临时存放目录，该目录正常情况下应该为空，只为临时存放
│   ├── user                    #用户头像文件夹
│
├── node_modules                #整个平台依赖的nodejs模块
├── server                      #Server端文件夹
│   ├── lib                     #Server端共用数据结构库
│   ├── router_admin.js         #系统平台
│   ├── router_my.js            #学习平台
│   ├── router_scratch.js       #scratch模块
│   ├── router_user.js          #用户登录、注册
│
├── app.js                      #平台主程序入口
├── package.json                #平台包依赖文件
├── process.json                #运行nodejs的配置
├── README.md                   #平台说明文件
├── www.comecode.net.sql        #数据库结构文件
```
#### 注：
1. 数据库结构文件中，已包含两个Scratch作品；
2. 数据库结构文件中，已包含平台管理员账号；（账号：comecode，密码：111111)。


### 交流学习
- 欢迎使用 Scratch-cn.Lite，如您喜欢及对您有帮助，请给点个星，支持赞助一下，为后续版本加点油油！！！
- 技术交流QQ群：115224892
- [功能参考：www.comecode.net](https://www.comecode.net)
- 版权遵从MIT开源协议，学习交流请入群。如需商用，请联系版权所有者！
