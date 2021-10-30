import amazon__offfers from '../../../../stores/amazon/api__coupons.json';
import flipkart__offers from '../../../../stores/flipkart/api__coupons.json';
import myntra__offers from '../../../../stores/myntra/api__coupons.json';
import ajio__offers from '../../../../stores/ajio/api__coupons.json';

shuffle(amazon__offfers);
shuffle(flipkart__offers);
shuffle(myntra__offers);
shuffle(ajio__offers);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const Offers = amazon__offfers.concat(flipkart__offers, myntra__offers,ajio__offers)
module.exports = Offers
