window.onload = function () {
    const tabLinks = document.querySelectorAll('.tabbar a');
    tabLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            // 1. 取消之前的selected
            // 2. 点哪个 就加selected
            document.querySelector('.selected').classList.remove('selected')
            this.classList.add('selected')
        }, false)
    })

    // 先拿到 swiper 的数据
    // bannerList 数据
    const swiper = document.querySelector('.swiper-wrapper');
    fetch('http://localhost:3000/banner')
        .then(data => data.json())
        .then(data => {
            console.log(data);
            console.log(data.banners.length);
            const banners = data.banners;
            
            banners.forEach(function (banner) {
                // const swiper_item = document.createElement('div');
                // swiper_item.classList.add('swiper-slide');
                const imageUrl = banner.imageUrl;
                // const image = document.createElement('img');
                // image.src = imageUrl;
                // swiper_item.appendChild(image);
                // swiper.appendChild(swiper_item);
                swiper.innerHTML += `<div class="swiper-slide" style="width: 375px;">
                <img src="${imageUrl}" alt=""></div>`
            })
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: {
                    disableOnInteraction: false,
                    delay:2500
                },
                direction: 'horizontal', // 垂直切换选项
                // observer: true, //swiper自己或子元素变化时，自动初始化swiper
                // observeParents: true, //swiper的父元素变化时，自动初始化swiper
                loop : true, // 循环模式选项
                
    
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination'
                },
    
                // 如果需要前进后退按钮
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },
    
                // 如果需要滚动条
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                // },
            })
        })
        

}