import type { NextApiRequest, NextApiResponse } from 'next'

import { cvRecords } from '../../data/cv-records'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.send({
    code: 200,
    data: cvRecords,
  })
}
