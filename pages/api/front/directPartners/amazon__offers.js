// // https://medium.com/@arifulhaque/how-to-use-amazon-product-advertising-api-v5-0-in-nodejs-263deba322b7.
// //

import Api from 'amazon-pa-api50';
import Config from 'amazon-pa-api50/lib/config';

const resources = require('amazon-pa-api50/lib/options').Resources // Optional for different resources
const condition = require('amazon-pa-api50/lib/options').Condition // for product condition
const country = require('amazon-pa-api50/lib/options').Country // Optional for different country
const searchIndex = require('amazon-pa-api50/lib/options').SearchIndex // for Search Index


let myConfig = new Config();
myConfig.accessKey = 'AKIATH7E3E3W7QCM5G4D'
myConfig.secretKey = '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'
myConfig.partnerTag = 'sportybruh0a-20'

const api = new Api(myConfig)
  
 console.log(resources)