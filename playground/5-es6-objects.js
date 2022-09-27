//Objects property shorthands

const name = 'Vibha'
const userAge = 31

const user = {
    //variable name and object parameter name are same then you can write only once like below
    name,
    age : userAge,
    location : 'Sweden'
}
console.log(user)

const product = {
    lable: 'Read notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const lable = product.lable
// const stock = product.stock
// console.log(lable,stock)

const {lable:productLable, stock, rating = 5} = product

console.log(productLable)
console.log(stock)
console.log(rating)

// const transaction = (type, myProduct) => {
//     const {lable, stock} = myProduct
//     console.log(lable,stock)
// }

const transaction = (type, {lable, stock, rating}) => {
    console.log(lable, stock, rating)
}

transaction('Order', product)