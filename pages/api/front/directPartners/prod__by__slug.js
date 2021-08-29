// import { flipkartOffersData } from './../directPartners/flipkart__offers'
// var slug = require('slug')
// // const posts = process.env.NODE_ENV === 'production' ? require('../../cache/stores__data').posts : store

// // http://localhost:3002/api/front/search/offers__by__query?q=myntra
// // ref  https://medium.com/@matswainson/building-a-search-component-for-your-next-js-markdown-blog-9e75e0e7d210

// export default (req, res) => {
//   console.log('req.query.q')
//   console.log(req.query.affor)

//   if(req.query.affor == "flipkart"){
//     console.log(flipkartOffersData);
//     const productsData = flipkartOffersData

//     const results = req.query.q ?
//     productsData.filter(post => slug(post.title, '-') == req.query.q)  : []
//   }
//   res.status(200).json({ results })
// }