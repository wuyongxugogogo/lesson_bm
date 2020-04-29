window.onload = function(){
    const tabLinks = document.querySelectorAll('.tabbar a');
    tabLinks.forEach(function(link){
        link.addEventListener('click',function(event){
            event.preventDefault();
            // 1. 取消之前的selected
            // 2. 点哪个 就加selected
            document.querySelector('.selected').classList.remove('selected')
            this.classList.add('selected')
        },false)
    })

    // 先拿到 swiper 的数据
    // bannerList 数据
    fetch('http://localhost:3000/banner')
        .then(data => data.json())
        .then(data =>{
            console.log(data);
        })
}