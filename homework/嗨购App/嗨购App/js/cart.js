const ul = document.querySelector('ul');
const count = document.querySelector('.count');
const sum = document.querySelector('.sum');


let cart = JSON.parse(localStorage.getItem('cart'));

render();

function addEvent() {
	const remove = document.querySelectorAll('.remove');
//	console.log(remove);
	remove.forEach(function(index, i) {
		index.addEventListener('click', function(event) {
			event.preventDefault();
			cart.splice(i, 1);
			window.localStorage.setItem('cart', JSON.stringify(cart));
			render();
		})
	})
}


function render() {
	if(cart) {
		let prices = 0
		ul.innerHTML = cart.map((index, i) => {
			return `
					<li>
						<h3>${index.goods}</h3>
						<span class="price">${index.price}</span>
						<h4 class="remove">移出购物车</h4>
					</li>
					`
		}).join('')
		cart.map((index, i) => {
			prices += parseInt(index.price)
		})
		sum.innerHTML = prices
	} else {
		ul.innerHTML = `购物车空空如也...`
	}
	addEvent();
	count.addEventListener('click',function(){
		localStorage.removeItem('cart');
		sum.innerHTML = '0';
		ul.innerHTML = `购物车空空如也...`;
	})
}