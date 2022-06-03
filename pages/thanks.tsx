import React from 'react'

import Layout from '../components/layout'

const Thanks = () => (
  <Layout page="thanks" title="Thanks | Alex Devero">
    <div className="hero">
      <h1>Thank you</h1>
    </div>

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-7 col-xl-6">
          <p className="mb-1">Thank you very much</p>

          <p className="mb-1">I'm truly grateful to all the wonderful humans and companies supporting my open source work on <a href="https://www.patreon.com/alexdevero">Patreon</a>.</p>

          <h3 className="support-tier-heading mb-2">Gold Supporters <small className="support-tier-price">(<a className="link--red link--underline" href="https://www.patreon.com/join/alexdevero/checkout?rid=5109499" rel="noopener noreferrer" target="_blank">&#36;100/month</a>)</small></h3>

          <ul style={{ display: 'none' }}>
            <li><a href="">Supporter name</a></li>
          </ul>

          <h3 className="support-tier-heading mb-2">Silver Supporter <small className="support-tier-price">(<a className="link--red link--underline" href="https://www.patreon.com/join/alexdevero/checkout?rid=5109494" rel="noopener noreferrer" target="_blank">&#36;50/month</a>)</small></h3>

          <ul style={{ display: 'none' }}>
            <li><a href="">Supporter name</a></li>
          </ul>

          <h3 className="support-tier-heading mb-2">Bronze Supporter <small className="support-tier-price">(<a className="link--red link--underline" href="https://www.patreon.com/join/alexdevero/checkout?rid=5109490" rel="noopener noreferrer" target="_blank">&#36;25/month</a>)</small></h3>

          <ul style={{ display: 'none' }}>
            <li><a href="">Supporter name</a></li>
          </ul>

          <h3 className="support-tier-heading mb-2">Supporters <small className="support-tier-price">(<a className="link--red link--underline" href="https://www.patreon.com/join/alexdevero/checkout?rid=5109489" rel="noopener noreferrer" target="_blank">&#36;8/month</a>)</small></h3>

          <ul style={{ display: 'none' }}>
            <li><a href="">Supporter name</a></li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default Thanks
