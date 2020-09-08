const { func } = require("prop-types");

const mid1 = (next) => (action) => {
    if (typeof action === 'function') {
        return action();
    }
    return next(action);
}
const mid2 = (next) => (action) => {
    console.log('mid2 start');
    next();
    console.log('mid2 end');
}
// redux 已经加载完了 两个中间件
const middlewares = [mid1, mid2];

// compose flow