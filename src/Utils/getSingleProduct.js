import products from './products';
export default (id = 1) => {
    return products.filter((elm, index) => index === id)[0];
}