function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    return (firstName + ' ' + lastName);
}

function makeHalfPrice(originalPrice) {
    return originalPrice/2;
}

function countBooks(libraryCatalogue) {
    return libraryCatalogue.length;
}

function isInStock(book){
    return (book.quantity > 0);
}

function getTotalOrderPrice(price, quantity) {
    return (price * quantity)* 1.20;
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};