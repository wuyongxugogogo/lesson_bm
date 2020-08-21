const Koa = require('koa')
const KoaViews = require('koa-views')
const Router = require('koa-router')
const path = require('path')
const app = new Koa()
// __dirname当前路径，加上 ./views变成绝对路径
app.use(KoaViews(path.resolve(__dirname, './views'), {
    extension: 'ejs'
}))
const router = Router()
// 存储型
let dataFromDB = `<iframe src='http://www.baidu.com'></iframe>`
// '<'.charCodeAt(0).toString('16')   将 < 转换成 16进制
let map = {
    '<': '$lt;',
    '>': '$gt;'
}
// 不安全的html
function html_encode(s) {
    s = s.replace('<', '&lt;')
    s = s.replace('>', '&gt;')
    // 转换为安全的html
    return s
}
router.get('/', async (ctx) => {
    const { xss } = ctx.query
    // 文件名 index
    await ctx.render('index', {
        username: 'lihua',
        xss: xss,
        dataFromDB: html_encode(dataFromDB)
    })
})
// 所有的中间件都要 app.use    allowedMethods就是 router.get
app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(9090, () => {
    console.log(9090)
})
