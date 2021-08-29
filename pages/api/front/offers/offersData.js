
// var flipartOffers = require ('./../directPartners/flipkart__offersData.js');
var cuelOffers = require('../cuels/cuelOffers.js')
// console.log('cuelOffers');
// console.log(cuelOffers);
// console.log(flipartOffers);
const offersData  = [
  ...cuelOffers,
  // ...flipartOffers
]

module.exports = offersData