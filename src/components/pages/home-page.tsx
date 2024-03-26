import Layout from '../layout'

export const HomePage = () => (
  <Layout title='Home'>
    <div className='flex w-full flex-1 items-center justify-center'>
      <div className='max-w-2xl'>
        <h1 className='mb-2 text-center text-5xl font-bold'>Alex Devero</h1>

        <p className='text-base'>Full-stack TypeScript developer and product designer from Czech Republic.</p>
      </div>
    </div>
  </Layout>
)
