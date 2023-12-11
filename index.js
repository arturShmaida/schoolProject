
class Product {
    constructor() {
        this.ID = "";
        this.name = "";
        this.description = "";
        this.price = 0.0;
        this.brand = "";
        this.sizes = [];
        this.activeSize = "";
        this.quantity = 0;
        this.date = undefined;
        this.reviews = [];
        this.images = [];
    }
    setID(ID) {
        this.ID = ID;
    }
    getID() {
        return this.ID;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setDescription(description) {
        this.description = description;
    }
    getDescription() {
        return this.description;
    }
    setPrice(price) {
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getBrand() {
        return this.brand;
    }
    setSizes(sizes) {
        this.sizes = sizes;
    }
    getSizes() {
        return this.sizes;
    }
    setActiveSize(ActiveSize) {
        this.ActiveSize = ActiveSize;
    }
    getActiveSize() {
        return this.ActiveSize;
    }
    
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    getQuantity() {
        return this.quantity;
    }

    setDate(date) {
        this.date = new Date(date);
    }
    getDate() {
        return this.date.getDate;
    }
    setReviews(reviews) {
        this.reviews = reviews;
    }
    getReviews() {
        return this.reviews;
    }
    setImages(images) {
        this.images = images;
    }
    getImages() {
        return this.images;
    }
    getReviewByID(ID) {
        if (this.reviews == []){ return null;}
        for(let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i].ID === ID) {
                return this.reviews[i];
            }
        }
    }
    getImage(index){
        if (!index || index >= this.images.length || index < 0){
            index = 0;
        }
        return this.images[index];
    }
    addSize(size){
        this.sizes.push(size); 
    }
    deleteSize(sizeName){
        let index = this.sizes.indexOf(sizeName);
        if(index < this.sizes.length && index >= 0){
            this.sizes.splice(1,index);
        }
    }
    addReview(review){
        if(review instanceof Reviews){
            this.reviews.push(review);
            return true;
        }
        return false;
    }   
    deleteReview(ID){
        for(let i = 0; i < this.reviews.length; i++){
            if (this.reviews[i].getID() === ID){
                this.reviews.splice(1,i);
                return;
            }
        }
    }
    getAverageRating(){
        let ratingSum = 0;
        for(let i = 0; i < this.reviews.length; i++){
            let map = this.reviews[i];
            for( [key, value] of map.entries()){
                ratingSum += value;
            }
        } 
        return ratingSum / this.reviews.length;
    }
}



class Reviews {
    constructor(ID, author, date, comment) {
        this.ID = ID;
        this.author = author;
        this.date = new Date(date);
        this.comment = comment;
        this.rating = new Map([
            ['service', 0],
            ['price', 0],
            ['value', 0],
            ['quality', 0]
        ]);
    }
    setID(ID) {
        this.ID = ID;
    }
    getID() {
        return this.ID;
    }
}


function searchProducts(products = [], search){
    let resultArray = [];
    let searchRegex = new RegExp(`${search}*`,i);
    for(let i = 0; i< product.length;i++ ){
        resultArray.push(products.filter(product => {
           return searchRegex.test(product.getName()) || searchRegex.test(product.description());
        }));
    }
    return resultArray;
}

function sortProducts(products, sortRule){
  products.sort((a,b) => {
    switch(sortRule){
        case "ID": return a.getID() - b.getID();
        case "price": return a.getPrice() - b.getPrice();
        case "name": return a.getName() - b.getName();
    }
  });
}

let product = new Product();
product.setID(10);
console.log(` product id: ${product.getID()}`);

console.log(` product id: ${product, 1}`);


