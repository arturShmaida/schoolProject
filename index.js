
function Product() {
    this.ID = "";
    this.name = "";
    this.description = "";
    this.price = 0.0;
    this.brand = "";
    this.sizes =  [];
    this.activeSize = "";
    this.quantity = 0;
    this.date = new Date();
    this.reviews =  [];
    this.images =  [];
}
Product.prototype.setID = function(ID) {
    this.ID = ID;
}
Product.prototype.getID = function() {
     return this.ID; 
}
Product.prototype.setName = function(name) {
    this.name = name;
}
Product.prototype.getName= function() {
     return this.name; 
}

function Reviews(ID, author, date, comment, rating){
    this.ID = "";
    this.author = "";
    this.date = new Date();
    this.comment = "";
    this.rating = new Map([
        ['service', 0],
        ['price', 0],
        ['value', 0],
        ['quality', 0]
    ]);

   
}



let product = new Product();
product.setID(20);
console.log(` product id: ${product.getID()}`);

console.log(` product id: ${product, 1}`);


