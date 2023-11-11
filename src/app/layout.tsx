import { ReactNode } from 'react'

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

import 'react-medium-image-zoom/dist/styles.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Typeface Raleway --> */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&amp;subset=latin-ext&display=optional"
        />

        {/* <!-- Font Awesome --> */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
