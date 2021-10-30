import amazon__offfers from '../../../../stores/amazon/api__coupons.json';
import flipkart__offers from '../../../../stores/flipkart/api__coupons.json';
import myntra__offers from '../../../../stores/myntra/api__coupons.json';

const Offers = amazon__offfers.concat(flipkart__offers, myntra__offers)
module.exports = Offers
