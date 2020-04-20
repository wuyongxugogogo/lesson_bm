// console.log('hello member')

// 有什么问题?
// 1.写死了,不能动态更新
// 2.js uuid npm
// 3.数据不合法, 数据不严谨 如何让不严谨的数据守规矩?
// 接口 typescript 约束 对象字面量 用法
interface MembersEntity {
    id: number;
    name: string;
    avatar: string;
    phone_number:number;
    home_town:string;
}

const members:  MembersEntity[] = [
    {
        id: 001,
        name: '唐雨恒',
        avatar: 'https://user-gold-cdn.xitu.io/2020/4/16/17180a70f36214b4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        phone_number:56465,
        home_town:'江西宜春'
    },
    {
        id: 002,
        name: '刘雷',
        avatar: 'https://user-gold-cdn.xitu.io/2020/4/16/17180a70f36214b4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        phone_number:56456,
        home_town:'江西抚州'
    },
    {
        id: 003,
        name: '曾宪明',
        avatar: 'https://user-gold-cdn.xitu.io/2020/4/16/17180a70f36214b4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        phone_number:64561,
        home_town:'江西赣州'
    }
]
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const id = form.idInput.value;
    const name =form.nameInput.value;
    const avatar =form.imgSrc.value;
    const phone_number =parseInt(form.PhoneNumber.value);
    const home_town =form.HomeTown.value;
    if (id.trim().length === 0) {
        alert('id 不能为空');
        return;
    }
    if (name.trim().length === 0) {
        alert('name 不能为空');
        return;
    }
    const ids = parseInt(id);
    members.push({
        id: ids,
        name: name,
        avatar: avatar,
        phone_number:phone_number,
        home_town:home_town
    });
    console.log(members);
    render()
})
const tbody = document.querySelector('#member tbody');
// tbody.innerHTML =
// 从json 数组 变成了 html 数组 tbody 最想要的
// console.log(members)
function render(){
    tbody.innerHTML = members
    .map((member) => {
        return `
        <tr>
            <td><div class="imgbox"><img src=${member.avatar}></div></td>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.phone_number}</td>
            <td>${member.home_town}</td>
        </tr>
        `
    }).join(" ")
}
render();