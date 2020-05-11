const fs = require('fs');

function copy(sourceUrl, destUrl){
    // fs.readFile(sourceUrl,(err,info) => {
    //     if(!err){
    //         fs.writeFile(destUrl,info,(err)=>{
    //             if(!err){
    //                 console.log('拷贝完毕');
    //             }
    //         })
    //     }
    // })

    // 源头
    const readStream = fs.createReadStream(sourceUrl);
    const writeStream = fs.createWriteStream(destUrl);
    readStream.pipe(writeStream);
    // pipe === |
}
// 不用流:
// 读完一个文件得到内容  info 变量放到我们计算内存里面的 写到某个地方
// 区别
// 前端 
copy('./readme.md','./copy.md')