
console.log("Objects containing other objects");

// Let's remember our Product class

class Product {

	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	toString() {
		return this.name + " " + "€" + this.price;
	}
}

// And create a couple of products
let p1 = new Product("vacuum cleaner", 100);
let p2 = new Product("pencil", 3);
let p3 = new Product("bike", 300);


// Now, let's create a ShoppingCart class, that will contain products

class ShoppingCart {

	constructor() {
		this.products = []; // empty at first
	}

	addProduct(product) {
		this.products.push(product);
	}

	toString() {
		return "cart with: " + this.products;
	}
    
    totalPrice() {
        let total = [];
        let discount = 0.9;
        for (let i = 0; i < this.products.length; i++) {
            total.push(this.products[i].price)
        }
        if (total.length <= 5) {
            console.log("No discount has been applied")
            return "Total= €"+total.reduce((a, b) => a + b, 0)
        } else {
            console.log("Discount has been applied");
            return ("Total= €"+(total.reduce((a, b) => a + b, 0)) * discount);
        }
    }
    }


// We can create a cart and add the products we created before

let cart = new ShoppingCart();
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p2);
cart.addProduct(p3);
cart.addProduct(p3);




console.log("We have a " + cart);

console.log(cart.totalPrice());
console.log(cart);


