import { stores } from '../../../../stores__data'
const posts = stores
// http://localhost:3002/api/front/search/stores__by__query?q=myn
import Cors from 'cors'
// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)
  const results = req.query.q ?
    posts.filter(post => post.name.toLowerCase().includes(req.query.q))  : []
  res.status(200).json({ results })
}

export default handler