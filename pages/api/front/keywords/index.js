import { keywords } from '../../../../keywords__data'

export default function handler(req, res) {
  res.status(200).json(keywords)
}
