
var Mock = require('mockjs');

var data = Mock.mock('/course',{
    "course|10":[{
        "key|+1":1,
        "key2|+1":1,
        "title":"@ctitle",
        "img":"@Image('100x100','@color','@cname')",
        "type":"专栏",
        "button":"",
        "lesson|30-60":45, //总共多少讲
        "learnd|20-30":10, //已学多少讲
    }]
})

export default data;