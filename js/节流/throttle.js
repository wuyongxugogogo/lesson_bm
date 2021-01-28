function throttle(func, wait) {
    var previous = 0;
    var time = null;
    return function () {
        var now = new Date().getTime();
        const remain = wait - (now - previous);
        if (now - previous > wait) {
            func();
            previous = now;
        } else if (!time) {
            time = setTimeout(() => {
                func();
                time = null;
                // 时间戳，只运用于头事件
                // 之后中间的事件触发(时间戳和timeout 是互竞的)
                // 为了不让时间戳触发事件，更新 previous
                previous = new Date().getTime();
            }, remain)
        }
    }
}

function throttle(fn, wait) {
    //定义为0，因为第一次肯定是要执行的
    let pre = 0;
    return function () {
        // 保存调用返回函数的this，方便后边时候指定this调用
        const that = this;
        const now = +new Date();
        // 如果超过或等于wait时间就执行fn
        if (now - pre >= wait) {
            fn.apply(that, arguments);
            // 改变pre的时间戳
            pre = now;
        }
    }
}
