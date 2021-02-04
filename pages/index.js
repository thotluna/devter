import Head from 'next/head'
import AppLayout from '../components/AppLayout'

export default function Home() {


  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <h1>
          <a href="https://nextjs.org">devter</a>
        </h1>

      </AppLayout>

      <style jsx>{`
        h1 {
          text-align: center;
          font-size: 48px;
        }

        a {
          color: orange;
          text-decoration: none;
        }
      `}</style>
    </>
  )
}