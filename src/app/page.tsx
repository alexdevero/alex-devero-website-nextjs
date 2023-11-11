import { Layout } from '@/components/layout'

export default function Home() {
  return (
    <Layout title='Home | Alex Devero'>
      <div className='flex w-full flex-1 items-center justify-center'>
        <div className='max-w-2xl'>
          <h1 className='mb-2 text-center text-5xl font-bold'>Alex Devero</h1>

          <p className='text-base'>Entrepreneur, designer and developer from Czech Republic.</p>
        </div>
      </div>
    </Layout>
  )
}
