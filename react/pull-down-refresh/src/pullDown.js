import hammer from 'hammerjs'

const WebPullToRefresh = () => {
    let defaults = {
        bodyEl: document.body,  // 最外层盒子
        contentEl: null,        // 内容区域
        ptrEl: null,            // loading区域
        distance: 40,           // 滑动超过40认为生效
        loadingFunction: () => { }, // 返回Promise
        resistance: 2.5         // 阻尼， 移动超过100px/2.5 ，元素移动与滑动距离的关系，值越大，元素移动距离越小
    }
    function init(options) {
        options = {
            ...defaults,
            ...options
        }
        const h = new hammer(options.contentEl)
        h.get('pan').set({ direction: hammer.DIRECTION_VERTICAL })
        h.on('panstart', _panStart)
        h.on('pandown', _panDown)
        h.on('panup', _panUp)
        h.on('panend', _panEnd)
        const ptrClass = options.ptrEl.classList
        let pan = {}
        function _panStart() {
            ptrClass.add('ptr-start')
        }
        function _panDown(e) {
            console.log('pan down')
            console.log(e.distance)
            pan.distance = e.distance / options.resistance
            _setContentPan()
        }
        function _panUp(e) {
            pan.distance = e.distance / options.resistance;
            _setContentPan();
        }
        function _panEnd() {
            if (ptrClass.contains('ptr-refresh')) {
                _loading()
            } else {
                _reset()
            }
        }
        function _setContentPan() {
            options.contentEl.style.transform = `translate3d(0,${pan.distance}px,0)`
            options.ptrEl.style.transform = `translate3d(0,${pan.distance}px,0)`

            if (pan.distance > options.distance) {
                ptrClass.add('ptr-refresh')
            } else {
                ptrClass.remove('ptr-refresh')
            }
        }
        function _loading(){
            options.contentEl.style.transform = `translate3d(0,40px,0)`;
            options.ptrEl.style.transform = `translate3d(0,40px,0)`
            options.loadingFunction().then(()=>{

                _reset();
            })
        }
        function _reset(){
            options.contentEl.style.transform = `translate3d(0,0,0)`;
            options.ptrEl.style.transform = `translate3d(0,0,0)`
        }
    }
    return {
        init
    }
}

export default WebPullToRefresh
