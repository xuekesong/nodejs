# nodejs

Node.js是一个能够在**服务器**端运行JavaScript的开放源代码、跨平台JavaScript运行环境。
Node.js是一个开源与跨平台的JavaScript运行时环境。Node.js在浏览器外运行**V8 JavaScript引擎（Google Chrome的内核）**。
Node.js应用程序运行于单个进程，无需为每个请求创建新的进程。
入门教程地址[http://nodejs.cn/learn/the-v8-javascript-engine](http://nodejs.cn/learn/the-v8-javascript-engine)

### 安装
下载地址 [http://nodejs.cn/download/](http://nodejs.cn/download/)
`nvm` 是一种流行的运行Node.js的方式，可以轻松的切换Node.js版本，也可以安装新版本用以尝试并且当出现问题时轻松回滚。[详细地址](https://github.com/nvm-sh/nvm)

### 命令行
`md 目录名` 新建文件夹
`rd 目录名` 删除文件夹
`node hello.js` 运行node脚本

### 模块化(核心模块+文件模块)
- 核心模块：由node引擎提供的模块，核心模块的标识就是模块的名字
- 文件模块：由用户自己创建的模块，文件的表示就是文件的路径（相对路径，绝对路径）
- 在Node中，一个js文件就是一个模块。
- 在Node中，每一个js文件中的js代码都是独立运行在一个函数中，而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问。
  **向外暴露属性或方法，属性：`exports.变量名 = "";` 方法：`exports.方法名 = function () {};`**
  通过`require()`函数引入外部的模块，require()可以传递一个文件的路径做参数，node将会自动根据该路径来引入外部模块，这里的路径，如果使用相对路径，必须以.或..开头
当node在执行模块中的代码时，它会首先在代码的最顶部添加如下代码：
  `function (exports, require, module, __filename, __dirname) {}`
  - exports: 该对象用来将变量或函数暴露到外部
  - require：函数，用来引入外部的模块
  - module：代表的是当前模块，exports就是module的属性，`module.exports === exports // true`
  - __filename: 当前模块的完整路径
  - __dirname: 当前模块文件夹的完整路径
  exports只能通过.的方式向外暴露内部变量，module.exports既可以通过.的形式，也可以直接赋值

### Buffer缓冲区
  - buffer的结构和数组很像，操作方法也和数组类似
  - 数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
  - 使用buffer不需要引入模块，直接使用即可
  - 再buffer总存储的都是二进制，但是在显示时都是以16进制的形式显示
  - buffer中每一个元素的范围都是从00 - ff(00000000 - 11111111)
    8bit = 1byte
    1024byte = 1kb
    1024kb = 1mb
    1024mb = 1gb
    1024gb = 1tb

### fs文件系统
- 文件系统简单来说就是通过Node来操作系统中的文件
- 使用文件系统，需要先引入fs模块，fs是核心模块，直接引入不需要下载
- 具体方法可参看[http://nodejs.cn/api/fs.html](http://nodejs.cn/api/fs.html)