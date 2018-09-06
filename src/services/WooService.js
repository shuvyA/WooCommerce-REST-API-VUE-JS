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
    return WooCommerce.getAsync('products').then((result) => {
        return JSON.parse(result.toJSON().body);
    });
}


export default {
    products
}
