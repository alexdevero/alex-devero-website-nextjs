import { memo } from 'react'

import { Layout } from '../components/layout'

const Home = memo(() => {
  return (
    <Layout page="home" title="Home | Alex Devero">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-7 col-xl-6">
            <h1 className="mb-2">Alex Devero</h1>

            <p>Entrepreneur, designer and developer from Czech Republic.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
})

Home.displayName = 'Home'

export default Home
