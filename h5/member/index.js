// console.log('hello member')
var members = [
    {
        id: 001,
        name: '唐雨恒',
        avatar: 'https://user-gold-cdn.xitu.io/2020/4/16/17180a70f36214b4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        phone_number: 56465,
        home_town: '江西宜春'
    },
    {
        id: 002,
        name: '刘雷',
        avatar: 'https://user-gold-cdn.xitu.io/2020/4/16/17180a70f36214b4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        phone_number: 56456,
        home_town: '江西抚州'
    },
    {
        id: 003,
        name: '曾宪明',
        avatar: 'https://user-gold-cdn.xitu.io/2020/4/16/17180a70f36214b4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        phone_number: 64561,
        home_town: '江西赣州'
    }
];
var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var id = form.idInput.value;
    var name = form.nameInput.value;
    var avatar = form.imgSrc.value;
    var phone_number = parseInt(form.PhoneNumber.value);
    var home_town = form.HomeTown.value;
    if (id.trim().length === 0) {
        alert('id 不能为空');
        return;
    }
    if (name.trim().length === 0) {
        alert('name 不能为空');
        return;
    }
    var ids = parseInt(id);
    members.push({
        id: ids,
        name: name,
        avatar: avatar,
        phone_number: phone_number,
        home_town: home_town
    });
    console.log(members);
    render();
});
var tbody = document.querySelector('#member tbody');
// tbody.innerHTML =
// 从json 数组 变成了 html 数组 tbody 最想要的
// console.log(members)
function render() {
    tbody.innerHTML = members
        .map(function (member) {
        return "\n        <tr>\n            <td><div class=\"imgbox\"><img src=" + member.avatar + "></div></td>\n            <td>" + member.id + "</td>\n            <td>" + member.name + "</td>\n            <td>" + member.phone_number + "</td>\n            <td>" + member.home_town + "</td>\n        </tr>\n        ";
    }).join(" ");
}
render();
