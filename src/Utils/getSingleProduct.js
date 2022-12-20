import products from './database';
export default (id = 1) => {
    return products.filter((elm, index) => index === id)[0];
}