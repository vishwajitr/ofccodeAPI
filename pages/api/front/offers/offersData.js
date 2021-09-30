
// var flipartOffers = require ('./../directPartners/flipkart__offersData.js');
var cuelOffers = require('../cuels/cuelOffers.js')
// var directOffers = require('../directPartners/directOffers.js')
// console.log('cuelOffers');
// console.log(cuelOffers);
// console.log(flipartOffers);
const offersData  = [
  ...cuelOffers,
  // ...flipartOffers,
  // ...directOffers
]

module.exports = offersData