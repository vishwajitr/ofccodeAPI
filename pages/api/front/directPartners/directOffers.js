/*
Scrape Data Shown
*/


// var offersData = require('./offersData.js');

// const OffersRaw  = offersData;
//   var directOffers = [];
//   for (var i = 0; i < OffersRaw.length; i++ ) {

//     if(OffersRaw[i]){
//         directOffers[i] = {};
//         directOffers[i]['title'] = OffersRaw[i]['name'];
//         directOffers[i]['description'] = OffersRaw[i]['description'];
//         directOffers[i]['url'] = OffersRaw[i]['link'];
//     }  
//   };
// console.log(directOffers);
//   // module.exports = directOffers



export default (req, res) => {
  let results = []
  if (req.query.q) {
    var offersData = require('./../../../../stores/' + (req.query.q) + '/api__coupons.json');
    //  console.log(offersData)

    const OffersRaw = offersData;
    var directOffers = [];
    for (var i = 0; i < OffersRaw.length; i++) {

      if (OffersRaw[i]) {
        directOffers[i] = {};
        directOffers[i]['title'] = OffersRaw[i]['title'];
        directOffers[i]['description'] = OffersRaw[i]['description'];
        directOffers[i]['url'] = OffersRaw[i]['link'];
      }
    };

    // console.log(directOffers);
    results = directOffers;
    res.status(200).json({ results })
  } else {
    results = [];
    res.status(200).json({ results })
  }

}
