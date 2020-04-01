const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

function handleMove(e){
    const y = e.pageY-this.offsetTop;// offsetTop获取某个dom结构到浏览器顶部的距离
    const percent = y / this.offsetHeight// offsetHeight获取某dom结构自身高度
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;

    // console.log(y,percent,height,playbackRate)
    bar.style.height = height ;
    bar.textContent = playbackRate.toFixed(2)+'x';

    // 等号左边playbackRate是方法 不是我们定义的
    // 等号右边playbackRate是我们自己定义的
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove',handleMove)