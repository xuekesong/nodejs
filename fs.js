/**
 * 同步和异步
 * 具体文档可查看 http://nodejs.cn/api/fs.html
 * 同步文件的写入：
 *   - 手动操作的步骤
 *      1. 打开文件
 *      2. 向文件中写入内容
 *      3. 保存并关闭文件
 */
var fs = require('fs')
// 打开文件 fs.openSync(path, flags[, mode])
//  path 要打开文件的路径
//  flags 打开文件要做的操作的类型 r-只读的 w-可写的
//  mode 设置文件的操作权限，一般不传
//  返回值：该方法会返回一个文件的描述符作为结果，可以通过该描述符来对文件进行各种操作
// fs.openSync('fs-test.js')

// fs.open(path, flags[, mode], callback)
//   - 用来打开一个文件
//   - 异步调用的方法，结果都是通过回调函数的参数返回的（err-错误对象，如果没有错误则为null，fd-文件的描述符）
fs.open('fs-test.js', 'w', function (err, fd) {
  if (!err) {
    console.log(fd)
  } else {
    console.log(err)
  }
})