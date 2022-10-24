import { memo, useEffect, useState } from 'react'

import Layout from '../components/layout'

import { Cv as CvType } from '../types/cv'

const Cv = memo(() => {
  const [cv, setCv] = useState<CvType | null>(null)

  useEffect(() => {
    const fetchCv = async () => {
      const response = await fetch('/api/cv')
      const data: {
        code: number;
        data: CvType;
      } = await response.json()
      setCv(data.data)
    }

    fetchCv()
  }, [])

  return (
    <Layout page="error" title="404 | Alex Devero">
      <div>
        <pre>
          <code>{JSON.stringify(cv, null, 2)}</code>
        </pre>
      </div>
    </Layout>
  )
})

export default Cv
