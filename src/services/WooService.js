var WooCommerceAPI = require('woocommerce-api');

import ConfigWoo from './ConfigWoo.js';

const WooCommerce = new WooCommerceAPI({
    url: 'https://shuvy.com/wooshop',
    consumerKey: ConfigWoo.consumerKey,
    consumerSecret: ConfigWoo.consumerSecret,
    wpAPI: true,
    version: 'wc/v1'
});


function products() {
    orders();
    return WooCommerce.getAsync('products').then((result) => {
        return JSON.parse(result.toJSON().body);
    });
}
function orders() {
    return WooCommerce.getAsync('orders').then((result) => {
        console.log('order',JSON.parse(result.toJSON().body) );
        return JSON.parse(result.toJSON().body);
    });
}


export default {
    products,
    orders
}
