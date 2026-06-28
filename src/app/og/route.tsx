import { ImageResponse } from 'next/og'

// Generates the default 1200x630 social-share card. Served at /og and
// referenced by getMetadata so every page emits a deterministic og:image.
export const dynamic = 'force-static'

const size = { width: 1200, height: 630 }

export function GET() {
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
