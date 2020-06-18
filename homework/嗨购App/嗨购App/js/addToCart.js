var push = document.querySelector('.add_cart');
			var price = document.querySelector('.price').innerText;
			var goods = document.querySelector('.goods').innerText;

			let localDate = JSON.parse(localStorage.getItem('cart'))||[];
			let cart = localDate;
			push.addEventListener('click',function(event){
				let obj={
					price: price,
					goods: goods
				}
				cart.push(obj);
				window.localStorage.setItem('cart',JSON.stringify(cart));
			})