function AbstractProduct(ID, name, description, price, quantity) {
	if (this.constructor === AbstractProduct) {
		throw new Error("Can't instantiate the abstract class");
	}
	this.ID = ID;
	this.name = name;
	this.description = description;
	this.price = price;
	this.quantity = quantity;
	this.date = new Date().toDateString();
	this.reviews = [];
	this.images = [];
}
Object.assign(AbstractProduct.prototype, {
	defineProperty(property, newValue) {
		if (this.hasOwnProperty(property)) {
			if (!newValue) {
				return Object.getOwnPropertyDescriptor(this, property).value;
			} else {
				this[property] = newValue;
			}
		}
	},
	setID(ID) {
		this.ID = ID;
	},
	getID() {
		return this.ID;
	},
	setName(name) {
		this.name = name;
	},
	getName() {
		return this.name;
	},
	setDescription(description) {
		this.description = description;
	},
	getDescription() {
		return this.description;
	},
	setPrice(price) {
		this.price = price;
	},
	getPrice() {
		return this.price;
	},

	setQuantity(quantity) {
		this.quantity = quantity;
	},
	getQuantity() {
		return this.quantity;
	},

	setDate(date) {
		this.date = new Date(date);
	},
	getDate() {
		return this.date.getDate;
	},
	setReviews(reviews) {
		this.reviews = reviews;
	},
	getReviews() {
		return this.reviews;
	},
	setImages(images) {
		this.images = images;
	},
	getImages() {
		return this.images;
	},
	getReviewByID(ID) {
		if (this.reviews == []) {
			return null;
		}
		for (let i = 0; i < this.reviews.length; i++) {
			if (this.reviews[i].ID === ID) {
				return this.reviews[i];
			}
		}
	},
	getImage(index) {
		if (!index || index >= this.images.length || index < 0) {
			index = 0;
		}
		return this.images[index];
	},

	addReview(review) {
		if (review instanceof Reviews) {
			this.reviews.push(review);
			return true;
		}
		return false;
	},
	deleteReview(ID) {
		for (let i = 0; i < this.reviews.length; i++) {
			if (this.reviews[i].getID() === ID) {
				this.reviews.splice(1, i);
				return;
			}
		}
	},
	getAverageRating() {
		let ratingSum = 0;
		for (let i = 0; i < this.reviews.length; i++) {
			let map = this.reviews[i];
			for ([key, value] of map.entries()) {
				ratingSum += value;
			}
		}
		return ratingSum / this.reviews.length;
	},
	getFullInformation() {
		const propertyNames = Object.getOwnPropertyNames(this);
		let infoString = "";
		let tempString = "";
		for (let i = 0; i < propertyNames.length; i++) {
			if (propertyNames[i] != undefined) {
				if (
					Array.isArray(this[propertyNames[i]]) &&
					this[propertyNames[i]].length === 0
				) {
					tempString = "empty";
				} else {
					tempString = this[propertyNames[i]];
				}
				infoString += ` ${propertyNames[i]} - ${tempString} \n`;
				console.log(infoString);
			}
		}
	},
	getPriceForQuantity(productQuantity) {
		return Intl.NumberFormat("en-IN", {
			style: "currency",
			currency: "USD",
		}).format(productQuantity * this.getPrice());
	},
});

function Clothes(
	brand,
	activeSize,
	material,
	color,
	ID,
	name,
	description,
	price,
	quantity
) {
	AbstractProduct.call(this, ID, name, description, price, quantity);
	this.brand = brand;
	this.sizes = [];
	this.activeSize = activeSize;
	this.material = material;
	this.color = color;
}
Clothes.prototype = Object.create(AbstractProduct.prototype);
Clothes.prototype.constructor = Clothes;

Object.assign(Clothes.prototype, {
	getMaterial() {
		return this.material;
	},
	setMaterial(material) {
		this.material = material;
	},
	getColor() {
		return this.color;
	},
	setColor(color) {
		this.color = color;
	},
	setBrand(brand) {
		this.brand = brand;
	},
	getBrand() {
		return this.brand;
	},
	setSizes(sizes) {
		this.sizes = sizes;
	},
	getSizes() {
		return this.sizes;
	},
	setActiveSize(ActiveSize) {
		this.ActiveSize = ActiveSize;
	},
	getActiveSize() {
		return this.ActiveSize;
	},
	addSize(size) {
		this.sizes.push(size);
	},
	deleteSize(sizeName) {
		let index = this.sizes.indexOf(sizeName);
		if (index < this.sizes.length && index >= 0) {
			this.sizes.splice(1, index);
		}
	},
});
function Electronics(warranty, power, ID, name, description, price, quantity) {
	AbstractProduct.call(this, ID, name, description, price, quantity);
	this.warranty = warranty;
	this.power = power;
}
Electronics.prototype = Object.create(AbstractProduct.prototype);
Electronics.prototype.constructor = Electronics;
Object.assign(Electronics.prototype, {
	getWarranty() {
		return this.warranty;
	},
	setWarranty(warranty) {
		this.warranty = warranty;
	},
});
class Reviews {
	constructor(ID, author, date, comment) {
		this.ID = ID;
		this.author = author;
		this.date = new Date(date);
		this.comment = comment;
		this.rating = new Map([
			["service", 0],
			["price", 0],
			["value", 0],
			["quality", 0],
		]);
	}
	setID(ID) {
		this.ID = ID;
	}
	getID() {
		return this.ID;
	}
}

function searchProducts(products = [], search) {
	let resultArray = [];
	let searchRegex = new RegExp(`${search}+`, "i");
	resultArray.push(
		products.filter((product) => {
			return (
				searchRegex.test(product.getName()) ||
				searchRegex.test(product.getDescription())
			);
		})
	);
	return resultArray;
}

function sortProducts(products, sortRule) {
	switch (sortRule) {
		case "ID": {
			console.log("ID trigger");
			products.sort((itemOne, itemTwo) => {
				let numOne = Number(itemOne.ID);
				let numTwo = Number(itemTwo.ID);
				return numOne - numTwo;
			});
			break;
		}
		case "price": {
			console.log("price trigger");

			products.sort((itemOne, itemTwo) => {
				return itemOne.price - itemTwo.price;
			});
			break;
		}
		case "name": {
			console.log("name trigger");

			products.sort((itemOne, itemTwo) => {
				let stringOne = itemOne.name.toUpperCase();
				let stringTwo = itemTwo.name.toUpperCase();
				if (stringOne > stringTwo) {
					return 1;
				}
				if (stringOne < stringTwo) {
					return -1;
				}
				return 0;
			});
			break;
		}
	}
	return products;
}

function createProducts() {
	const products = [];
	const productNames = ["Cap", "Cat", "door", "Book", "Anton"];
	const productDescriptions = [
		"Nice blue Cap",
		"Big fat Cat",
		"Door of your dream",
		"This book will make you wize",
		"If you need a fried it could be him",
	];
	const length = 5;
	for (let i = 0; i < length; i++) {
		products.push(
			new Product(
				`${Math.round(Math.random() * 100)}`,
				productNames[i],
				productDescriptions[i],
				Math.round(Math.random() * 1000)
			)
		);
	}

	return products;
}

function testFilterFunction(searchWord) {
	const productsArray = createProducts();
	const filteredArray = searchProducts(productsArray, searchWord);
	console.log(`${searchWord} results:`);

	console.log(filteredArray);
}
function testSortFunction() {
	const sortRule = "ID";
	const productsArray = createProducts();
	console.log("initial array: ");
	console.log(productsArray);
	console.log("array: sorted with: " + sortRule);
	console.log(sortProducts(Array.from(productsArray), sortRule));
	console.log(sortProducts(Array.from(productsArray), "name"));
	console.log(sortProducts(Array.from(productsArray), "price"));
}

const clothe = new Clothes(
	"Nike",
	"M",
	"nice",
	"red",
	12114,
	"Berret",
	"",
	6.2
);
console.log(clothe);
console.log(clothe.getPriceForQuantity(3));

const electronics = new Electronics(1121, 231, 121);
console.log(electronics);
