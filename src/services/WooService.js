var WooCommerceAPI = require('woocommerce-api');

import ConfigWoo from './ConfigWoo.js';



var WooCommerce = new WooCommerceAPI({
    url: 'https://shuvy.com/wooshop',
    consumerKey: ConfigWoo.consumerKey,
    consumerSecret: ConfigWoo.consumerSecret,
    wpAPI: true,
    version: 'wc/v1'
});







function products() {
    // console.log(config.config);
    return WooCommerce.getAsync('products').then((result) => {
        console.log(JSON.parse(result.toJSON().body));

        return JSON.parse(result.toJSON().body);

    });

    // return resultProduct;
}




// console.log({ result });


export default {
    products
}
