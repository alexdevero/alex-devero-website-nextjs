import { ImageResponse } from 'next/og'

// Default social-share image for the whole site. Pages can override with their
// own ogImage; otherwise this 1200x630 card is used for link previews.
export const alt = 'Alex Devero – Senior Frontend Engineer (React/Next.js)'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#121212',
          color: '#f5f5f5',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 40, color: '#94a3b8', marginBottom: 24 }}>alexdevero.com</div>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.1 }}>Alex Devero</div>
        <div style={{ fontSize: 48, marginTop: 24, color: '#cbd5e1' }}>
          Senior Frontend Engineer (React/Next.js)
        </div>
        <div style={{ fontSize: 32, marginTop: 16, color: '#94a3b8' }}>
          Frontend Tech Lead · 10+ years · React, Next.js, TypeScript
        </div>
      </div>
    ),
    { ...size }
  )
}
