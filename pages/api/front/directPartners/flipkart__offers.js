
// https://npm.io/package/flipkart-affiliate-client
// https://github.com/zivost/flipkart-affiliate-client/
import { createClient } from "../../lib/flipkart/index";

let client = createClient({
  FkAffId: "vishwajit8",
  FkAffToken: "df7952131bb74afaa6a2dc57d32240d0",
  responseType: "json",
});

export default function handler(req, res) {
  if (req.query.q === "dotd") {
    client.getDealsOfDay(null, function (err, resp) {
      if (!err) {        
        // console.log(resp);
        let flipkartOffersRaw = {};
        let flipkartOffersObj = {};
        flipkartOffersRaw = JSON.parse(resp);
        flipkartOffersRaw = flipkartOffersRaw.dotdList;
        // console.log(flipkartOffersRaw.dotdList);
        var flipkartOffers = [];
          for (var i = 0; i < flipkartOffersRaw.length; i++) {
              // console.log(flipkartOffersRaw);
              flipkartOffers[i] = {};
              flipkartOffers[i]["title"] = flipkartOffersRaw[i].title;
              flipkartOffers[i]["title"] = flipkartOffersRaw[i].title;
              flipkartOffers[i]["merchant"] = "";
              flipkartOffers[i]["id"] = "";
              flipkartOffers[i]["categories"] = flipkartOffersRaw[i].category;
              flipkartOffers[i]["description"] = flipkartOffersRaw[i].description;
              flipkartOffers[i]["coupon_code"] = "NA";
              flipkartOffers[i]['url'] = (flipkartOffersRaw[i].url) ? flipkartOffersRaw[i].url : "";
              flipkartOffers[i]["start_date"] = flipkartOffersRaw[i].startTime;
              flipkartOffers[i]["end_date"] = flipkartOffersRaw[i].endTime;
              flipkartOffers[i]["offer_added_at"] = flipkartOffersRaw[i].startTime;
              flipkartOffers[i]["image_url"] = flipkartOffersRaw[i].imageUrls;
              flipkartOffers[i]["campaign_name"] = "campaign_name";

              flipkartOffersObj[i] = flipkartOffers;
            }
            res.status(200).json(flipkartOffersObj[0]);
          }
    });
  }else if (req.query.q === "getCategoryFeed") {
    
    //Category Feed
    // if(req.query.cat = "food_nutrition")

      client.getCategoryFeed({
        trackingId: 'vishwajit8'
      }, function(err, result){
          if(!err){
            result= JSON.parse(result)
            let flipkartCatsObj = {};
            let flipkartCat = {};
            let flipkartOffersTemp = {};
            let flipkartCatsObjTemp2 = {}
            flipkartCatsObj = result['apiGroups']['affiliate']['apiListings'];
              // console.log(flipkartCatsObj)
            
              // console.log(result['apiGroups']['affiliate']['apiListings']['food_nutrition']['availableVariants']['v1.1.0']['get']);
              if(req.query.catName){    
                let catName = req.query.catName;
                flipkartOffersTemp = flipkartCatsObj[catName]
                // console.log(flipkartOffersTemp);          
                flipkartCat = flipkartOffersTemp;            
                if(req.query.getUrl==1){
                  flipkartCatsObjTemp2 = flipkartCat['availableVariants']['v1.1.0']['get'];
                }else{
                  flipkartCatsObjTemp2 = flipkartCat;
                }
              }else{
                var i = 0 
                for (var key in flipkartCatsObj) {
                  if (flipkartCatsObj.hasOwnProperty(key)) {
                      // console.log(key + " -> " + flipkartCatsObj[key]);
                      // console.log(flipkartCatsObj[key]);
                      flipkartCatsObjTemp2[i] = {}
                      flipkartCatsObjTemp2[i]['resourceName'] = flipkartCatsObj[key]['availableVariants']['v1.1.0']['resourceName']
                      flipkartCatsObjTemp2[i]['cat__name'] = flipkartCatsObj[key]['availableVariants']['v1.1.0']['resourceName']
                      flipkartCatsObjTemp2[i]['cat__data__url'] = flipkartCatsObj[key]['availableVariants']['v1.1.0']['get']
                      flipkartCatsObjTemp2[i]['cat__name'] = flipkartCatsObjTemp2[i]['cat__name'].replace("_", " ");
                      i++
                    }
                }
              }
              res.status(200).json({'catData': flipkartCatsObjTemp2});
          }else {
            console.log(err);
          }
      });
    
  }else if (req.query.q === "getProductsFeed" && req.query.catName) {
    //Product Feed

    let ProdURL
    client.getCategoryFeed({
      trackingId: 'vishwajit8'
    }, function(err, result){
        if(!err){
          result= JSON.parse(result)
          let flipkartCatsObj = {};
          let flipkartCat = {};
          let flipkartOffersTemp = {};
          let flipkartCatsObjTemp2 = {}
          flipkartCatsObj = result['apiGroups']['affiliate']['apiListings'];
            if(req.query.catName){    
              let catName = req.query.catName;
              flipkartOffersTemp = flipkartCatsObj[catName]
              ProdURL = flipkartOffersTemp['availableVariants']['v1.1.0']['get']
              // console.log('typeof ProdURL')
              // console.log(ProdURL)
              // console.log(typeof ProdURL)

              if(ProdURL){
                // https://affiliate-api.flipkart.net/affiliate/1.0/feeds/vishwajit8/category/7jv.json?expiresAt=1630275759510&sig=653b1076e5095414523d8ba2951adeee
                client.getProductsFeed({
                  url: ProdURL
                }, function(err, result){
                    if(!err){
                      let flipkartOffersRaw = {};
                      let flipkartOffersObj = {};
                      let flipkartOffersTemp = {};
                      let flipkartOffersTemp2 = {};
                      flipkartOffersRaw = JSON.parse(result);            
                      flipkartOffersRaw = flipkartOffersRaw['products'];
                      var flipkartOffers = [];
                      for (var i = 0; i < flipkartOffersRaw.length; i++) {
                        flipkartOffersTemp = flipkartOffersRaw[i]['productBaseInfoV1']
                        flipkartOffersTemp2 = flipkartOffersRaw[i]['productShippingInfoV1']
                        // console.log('flipkartOffersTemp2')
                        console.log(flipkartOffersTemp)
                        flipkartOffers[i] = {};
                        flipkartOffers[i]["title"] = flipkartOffersTemp.title;
                        flipkartOffers[i]["productBrand"] = flipkartOffersTemp.productBrand;
                        flipkartOffers[i]["sellerName"] = flipkartOffersTemp2.sellerName;
                        flipkartOffers[i]["id"] = flipkartOffersTemp.productId;
                        flipkartOffers[i]["categoryPath"] = flipkartOffersTemp.categoryPath;
                        flipkartOffers[i]["description"] = flipkartOffersTemp.productDescription;
                        flipkartOffers[i]["offers"] = flipkartOffersTemp.offers;
                        flipkartOffers[i]["inStock"] = flipkartOffersTemp.inStock;
                        flipkartOffers[i]["codAvailable"] = flipkartOffersTemp.codAvailable;
                        flipkartOffers[i]["discountPercentage"] = flipkartOffersTemp.discountPercentage;
                        flipkartOffers[i]["flipkartSellingPriceAmount"] = flipkartOffersTemp.flipkartSellingPrice.amount;
                        flipkartOffers[i]["flipkartSellingPriceCurrency"] = flipkartOffersTemp.flipkartSellingPrice.currency;
                        flipkartOffers[i]["flipkartSpecialPriceAmount"] = flipkartOffersTemp.flipkartSpecialPrice.amount;
                        flipkartOffers[i]["flipkartSpecialPriceCurrency"] = flipkartOffersTemp.flipkartSpecialPrice.currency;
                        flipkartOffers[i]['url'] = flipkartOffersTemp.productUrl;
                        flipkartOffers[i]["image_url"] = flipkartOffersTemp.imageUrls['200x200'];
                        flipkartOffersObj[i] = flipkartOffers;
                        // console.log(flipkartOffersObj[i]);
                        }
                      res.status(200).json(flipkartOffersObj[0]);
                      // res.status(200).json(result);
                    }else {
                      console.log(err);
                    }
                })
          
              }

            }
        }else {
          console.log(err);
        }
    });

    
  // }else if (req.query.q === "getProductsFeed") {
  //   client.getProductsFeed({
  //     url: 'https://affiliate-api.flipkart.net/affiliate/1.0/feeds/vishwajit8/category/7jv.json?expiresAt=1630275759510&sig=653b1076e5095414523d8ba2951adeee'
  //   }, function(err, result){
  //       if(!err){
  //         let flipkartOffersRaw = {};
  //         let flipkartOffersObj = {};
  //         let flipkartOffersTemp = {};
  //         let flipkartOffersTemp2 = {};
  //         flipkartOffersRaw = JSON.parse(result);            
  //         flipkartOffersRaw = flipkartOffersRaw['products'];
  //         var flipkartOffers = [];
  //         for (var i = 0; i < flipkartOffersRaw.length; i++) {
  //           flipkartOffersTemp = flipkartOffersRaw[i]['productBaseInfoV1']
  //           flipkartOffersTemp2 = flipkartOffersRaw[i]['productShippingInfoV1']
  //           flipkartOffers[i] = {};
  //           flipkartOffers[i]["title"] = flipkartOffersTemp.title;
  //           flipkartOffers[i]["productBrand"] = flipkartOffersTemp.productBrand;
  //           flipkartOffers[i]["sellerName"] = flipkartOffersTemp2.sellerName;
  //           flipkartOffers[i]["id"] = flipkartOffersTemp.productId;
  //           flipkartOffers[i]["categoryPath"] = flipkartOffersTemp.categoryPath;
  //           flipkartOffers[i]["description"] = flipkartOffersTemp.productDescription;
  //           flipkartOffers[i]["offers"] = flipkartOffersTemp.offers;
  //           flipkartOffers[i]["inStock"] = flipkartOffersTemp.inStock;
  //           flipkartOffers[i]["codAvailable"] = flipkartOffersTemp.codAvailable;
  //           flipkartOffers[i]["discountPercentage"] = flipkartOffersTemp.discountPercentage;
  //           flipkartOffers[i]["flipkartSellingPriceAmount"] = flipkartOffersTemp.flipkartSellingPrice.amount;
  //           flipkartOffers[i]["flipkartSellingPriceCurrency"] = flipkartOffersTemp.flipkartSellingPrice.currency;
  //           flipkartOffers[i]["flipkartSpecialPriceAmount"] = flipkartOffersTemp.flipkartSpecialPrice.amount;
  //           flipkartOffers[i]["flipkartSpecialPriceCurrency"] = flipkartOffersTemp.flipkartSpecialPrice.currency;
  //           flipkartOffers[i]['url'] = "";
  //           flipkartOffers[i]["image_url"] = flipkartOffersTemp.imageUrls;
  //           flipkartOffersObj[i] = flipkartOffers;
  //           }
  //         res.status(200).json(flipkartOffersObj[0]);
  //         // res.status(200).json(result);
  //       }else {
  //         console.log(err);
  //       }
  //   })
    
    
        
      
    
  } else {
    client.getAllOffers(null, function (err, resp) {
      if (!err) {
        // console.log(resp);
        let flipkartOffersRaw = {};
        let flipkartOffersObj = {};
        flipkartOffersRaw = JSON.parse(resp);
        flipkartOffersRaw = flipkartOffersRaw.allOffersList;
        var flipkartOffers = [];
        for (var i = 0; i < flipkartOffersRaw.length; i++) {
          // console.log(flipkartOffersRaw);
          flipkartOffers[i] = {};
          flipkartOffers[i]["title"] = flipkartOffersRaw[i].title;
          flipkartOffers[i]["title"] = flipkartOffersRaw[i].title;
          flipkartOffers[i]["merchant"] = "";
          flipkartOffers[i]["id"] = "";
          flipkartOffers[i]["categories"] = flipkartOffersRaw[i].category;
          flipkartOffers[i]["description"] = flipkartOffersRaw[i].description;
          flipkartOffers[i]["coupon_code"] = "NA";
          flipkartOffers[i]['url'] = (flipkartOffersRaw[i].url) ? flipkartOffersRaw[i].url : "";
          flipkartOffers[i]["start_date"] = flipkartOffersRaw[i].startTime;
          flipkartOffers[i]["end_date"] = flipkartOffersRaw[i].endTime;
          flipkartOffers[i]["offer_added_at"] = flipkartOffersRaw[i].startTime;
          flipkartOffers[i]["image_url"] = flipkartOffersRaw[i].imageUrls;
          flipkartOffers[i]["campaign_name"] = "campaign_name";

          flipkartOffersObj[i] = flipkartOffers;
        }

        res.status(200).json(flipkartOffersObj[0]);
      }
    });
  }
}
