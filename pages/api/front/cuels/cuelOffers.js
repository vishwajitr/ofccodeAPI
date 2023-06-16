import cgamazon__offfers from 'http://140.238.244.200/stores/cgamazon/api__coupons.json';
import ddamazon__offfers from 'http://140.238.244.200/stores/ddamazon/api__coupons.json';
import cgflipkart__offers from 'http://140.238.244.200/stores/cgflipkart/api__coupons.json';
import ddflipkart__offers from 'http://140.238.244.200/stores/ddflipkart/api__coupons.json';
import myntra__offers from '../../../../stores/myntra/api__coupons.json';
import ajio__offers from '../../../../stores/ajio/api__coupons.json';

// import cgamazon__offfers from '../../../../stores/cgamazon/api__coupons.json';
// import ddamazon__offfers from '../../../../stores/ddamazon/api__coupons.json';
// import cgflipkart__offers from '../../../../stores/cgflipkart/api__coupons.json';
// import ddflipkart__offers from '../../../../stores/ddflipkart/api__coupons.json';
// import myntra__offers from '../../../../stores/myntra/api__coupons.json';
// import ajio__offers from '../../../../stores/ajio/api__coupons.json';

// shuffle(amazon__offfers);
// shuffle(flipkart__offers);
shuffle(myntra__offers);
shuffle(ajio__offers);
shuffle(cgamazon__offfers);
shuffle(ddamazon__offfers);
shuffle(cgflipkart__offers);
shuffle(ddflipkart__offers);


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const Offers = cgamazon__offfers.concat(cgflipkart__offers, myntra__offers, ajio__offers, ddflipkart__offers, cgamazon__offfers, ddamazon__offfers)
module.exports = Offers
