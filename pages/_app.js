// Import main stylesheet
// import '../style.css'

// Import Base
import './../styles/base/_modern-normalize.css'
import './../styles/base/_base.css'
import './../styles/base/_grid.css'
import './../styles/base/_typography.css'

// Components
import './../styles/components/_buttons.css'
import './../styles/components/_footer.css'
import './../styles/components/_forms.css'
import './../styles/components/_header.css'
import './../styles/components/_hero.css'
import './../styles/components/_layout.css'
import './../styles/components/_lists.css'
import './../styles/components/_loader.css'

// Helpers
import './../styles/helpers/_helpers-spacing.css'

// Pages
import './../styles/pages/_page-about.css'
import './../styles/pages/_page-home.css'
import './../styles/pages/_page-projects.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
