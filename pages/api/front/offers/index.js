// import { offers } from '../../../../offers__data'
var offersData = require('./offersData.js');
// console.log('offersData');

export default function handler(req, res) {
  // console.log(offersData);
  res.status(200).json(offersData)
}
