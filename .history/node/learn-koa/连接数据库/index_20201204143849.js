const express = require('express')
const app = express()

app.listen(8088, () => {
    console.log('服务启动')
})

app.get('/', (req, res) => {
    res.send('<div>hello world</div>')
})

const mysql = require('mysql')

const option = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'student',
    connectTimeout: 5000, //连接超时
    multipleStatements: false //是否允许一个query中包含多条sql语句
}
const conn = mysql.createConnection(option);
app.post('/login', (req, res) => {
    conn.query("SELECT * FROM students", (e, r) => {
        res.json(new Result({ data: r }))
    })
})
function Result ({ code = 1, msg = '', data = {} }) {
    this.code = code;
    this.msg = msg;
    this.data = data;
}