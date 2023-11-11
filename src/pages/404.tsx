import { memo } from 'react'

import Layout from '../components/layout'

const NotFoundPage = memo(() => (
  <Layout page="error" title="404 | Alex Devero">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-7 col-xl-6">
          <div className="hero">
            <h1>404 - NOT FOUND</h1>
          </div>

          <p className="text--center">
            You just hit a route that doesn&#39;t exist... the sadness.
          </p>
        </div>
      </div>
    </div>
  </Layout>
))

NotFoundPage.displayName = 'NotFoundPage'

export default NotFoundPage
