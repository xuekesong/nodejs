var str = "Hello Buffer";
// 将一个字符串保存到buffer中
var buf = Buffer.from(str);

// console.log(buf.length); // 占用字符的大小
// console.log(str.length); // 字符串的长度

// 创建一个指定大小的buffer
// buffer构造函数都是不推荐使用的
var buf2 = new Buffer(10); // 10个字节的buffer
buf2[0] = 88;
console.log(buf2[0].toString(16)); // 以16进制输出