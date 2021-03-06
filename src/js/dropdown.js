const productContainer = document.querySelector('.home_row');
const cartList = document.querySelector('.cart-list');

let items = [
	{
		id: 1,
		title: 'Then lean startup',
		price: 29.99,
		rating: 4,
		image: 'https://m.media-amazon.com/images/I/81UXdTyVXfL._AC_UL320_.jpg'
	},
	{
		id: 2,
		title:
			'Sony WH1000XM3 Noise Cancelling Headphones, Wireless Bluetooth Over the Ear Headset – Black (2018 Version)',
		price: 324.99,
		rating: 3,
		image: 'https://m.media-amazon.com/images/I/519EahgX90L._AC_UL320_.jpg'
	},
	{
		id: 3,
		title: 'DualShock 4 Wireless Controller for PlayStation 4 - Magma Red',
		price: 64.99,
		rating: 4,
		image: 'https://m.media-amazon.com/images/I/81L9+4dTIgL._AC_UY218_.jpg'
	},
	{
		id: 4,
		title: 'Sony X950H 49 Inch TV: 4K Ultra HD Smart LED TV with HDR and Alexa Compatibility - 2020 Model',
		price: 866.99,
		rating: 4,
		image: 'https://m.media-amazon.com/images/I/61t1BmzC5WL._AC_UY218_.jpg'
	},
	{
		id: 5,
		title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
		price: 199.99,
		rating: 4,
		image: 'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
	},
	{
		id: 6,
		title: 'Oster Toaster Oven | Digital Convection Oven, Large 6-Slice Capacity, Black/Polished Stainless',
		price: 98.99,
		rating: 5,
		image: 'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2s'
	},
	{
		id: 7,
		title: 'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric',
		price: 91.99,
		rating: 4,
		image: 'https://m.media-amazon.com/images/I/81NB5wO1HnL._AC_UL320_.jpg'
	},
	{
		id: 8,
		title:
			'Mueller Premium 1500W Electric Kettle with SpeedBoil Tech, 1.8 Liter Cordless with LED Light, Borosilicate Glass,...',
		price: 32461.99,
		rating: 4,
		image: 'https://m.media-amazon.com/images/I/81UXdTyVXfL._AC_UL320_.jpg'
	},
	{
		id: 9,
		title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor, Super Ultra Wide Dual WQHD 5120 x 1440",
		price: 200.99,
		rating: 4,
		image: 'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
	},
	{
		id: 10,
		title: 'Samsonite Xenon 3.0 Slim Backpack Laptop, Black, Medium...',
		price: 150.99,
		rating: 4,
		image: 'https://m.media-amazon.com/images/I/81z0S-eGXAL._AC_UY218_.jpg'
	},
	{
		id: 11,
		title:
			'Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD,...',
		price: 364.99,
		rating: 4,
		image: 'https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg'
	},
	{
		id: 12,
		title:
			'Acer XFA240 bmjdpr 24 Gaming G-SYNC Compatible Monitor 1920 x 1080, 144hz Refresh Rate, 1ms Response Time with Height, Pivot, Swivel & Tilt, Black',
		price: 450.99,
		rating: 4,
		image: 'https://m.media-amazon.com/images/I/81NL4nYr15L._AC_UY218_.jpg'
	}
];
let cart = [];

const showRating = (value) => {
	let max = 5;
	let show = 5 - value;
	const checked = '<pan class="fa fa-star checked"></span>'.repeat(value);
	const unchecked = '<span class="fa fa-star"></span>'.repeat(show);
	return checked + unchecked;
};

const loadProducts = () => {
	items.forEach((item) => {
		let { id, title, price, image, rating } = item;
		productContainer.innerHTML += `
        <div data-id= "${id}" class="product">
                     <img 
                       src="${image}"
                      />
                      <div class="product_info">
                          <p>${title}</p>
                          <p class="product_price">
                              <strong>$</strong>
                              <strong>${price}</strong>
                          </p>
                          <div id="rating">
                          ${showRating(rating)}
                          </div>
                      </div>
                      <button class="add-to-cart">ADD TO CART</button>
                 </div>`;
	});
	loadCart();
};

const loadCart = () => {
    cartList.innerHTML = "";
	if (cart.length > 0) {
		cart.forEach((item) => {
			let { id, title, price, image, rating } = item;
			cartList.innerHTML += `
       <div cart-id = "${id}" class="dropdown-product">
                            <img src="${image}" />
                            <div class="product-details">
                                <p>${title}</p>
                                <div class="details">
                                    <div class="details-manipulate">
                                        <i class="fas fa-chevron-left"></i>
                                        <span>1</span>
                                        <i class="fas fa-chevron-right"></i>
                                    </div>
                                    <div class="details-info">
                                        <span>$${price}</span>
                                        <button>Del</button>
                                    </div>
                                </div>
                            </div>`;
		});
	} else {
		cartList.innerHTML = '<h5>Cart is Empty</h5>';
	}
};

loadProducts();

const updateQV = (value = 0) => {
	const cartQV = document.getElementById('cart-quantity-value');
	cartQV.innerHTML = value;
};

function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		let dropdowns = document.getElementsByClassName('dropdown-content');
		let i;
		for (i = 0; i < dropdowns.length; i++) {
			const openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
};

productContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('add-to-cart')) {
		addToCart(e.target.parentElement.dataset.id);
	}
});

const addToCart = (num) => {
	const product = items.filter((item) => item.id === parseInt(num))[0];

	let cartValue = cart.filter((item) => item.id === product.id)[0];
	if (!cartValue) {
		cart.push(product);
		updateQV(cart.length);
		loadCart();
	}
};
