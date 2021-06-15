import { stores } from '../../../../stores__data'
const posts = stores
// http://localhost:3002/api/front/search/stores__by__query?q=myn
import Cors from 'cors'
// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})


const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}


// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }

//       return resolve(result)
//     })
//   })
// }

async function handler(req, res) {
  // Run the middleware
  // await runMiddleware(req, res, cors)
  const results = req.query.q ?
    posts.filter(post => post.name.toLowerCase().includes(req.query.q))  : []
  res.status(200).json({ results })
}

export default allowCors(handler)