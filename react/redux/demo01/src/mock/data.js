var Mock = require('mockjs');

var data = Mock.mock('/list', {
    "data": {
        "list": [
            '早上4点起床，锻炼身体',
            '中午下班游泳一小时',
            '晚上8点到10点，学习两个小时'
        ]
    }
})

export default data;