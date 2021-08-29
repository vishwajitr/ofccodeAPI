// https://github.com/zivost/flipkart-affiliate-client/
import { createClient } from "../../lib/flipkart/index";

let client = createClient({
  FkAffId: "vishwajit8",
  FkAffToken: "df7952131bb74afaa6a2dc57d32240d0",
  responseType: "json",
});

function handler(req, res) {
  if (req.query.q === "dotd") {
    client.getDealsOfDay(null, function (err, resp) {
      if (!err) {
        console.log(resp);
        let flipkartOffersRaw = {};
        let flipkartOffersObj = {};
        flipkartOffersRaw = JSON.parse(resp);
        flipkartOffersRaw = flipkartOffersRaw.dotdList;
        console.log(flipkartOffersRaw.dotdList);
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
            // res.status(200).json(flipkartOffersObj[0]);
            return flipkartOffersObj[0]
          }
    });
  } else {
    client.getAllOffers(null, function (err, resp) {
      if (!err) {
        console.log(resp);
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

        // res.status(200).json(flipkartOffersObj[0]);
        return flipkartOffersObj[0]
      }
    });
  }
}
module.exports = flipkartOffersData