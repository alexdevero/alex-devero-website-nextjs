import Layout from '@/components/layout'
import { Cv as CvType } from '@/types/cv'

async function getCv() {
  try {
    const response = await fetch('http://localhost:3001/api/cv')
    const data: CvType = await response.json()

    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

export default async function Cv() {
  const cvData = await getCv()

  return (
    <Layout title='404 | Alex Devero'>
      <div>
        <pre>
          <code>{JSON.stringify(cvData, null, 2)}</code>
        </pre>
      </div>
    </Layout>
  )
}
