
function Product(ID,name,description, price,brand,sizes,activeSize,quantity,date,reviews,images) {
    this.ID = ID;
    this.name = name;
    this.description = description;
    this.price =price;
    this.brand = brand;
    this.sizes = sizes;
    this.activeSize = activeSize;
    this.quantity = quantity;
    this.date = date;
    this.reviews =reviews;
    this.images = images
}



let product = new Product();
console.log(product.sizes = 11);