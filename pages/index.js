import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import Button from '../components/Buttom'
import GitHub from '../components/Icons/GitHub'
import { colors } from '../styles/theme'

export default function Home() {


  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src='devter-logo.png' alt='Logo' />
          <h1>Devter</h1>
          <h2>Talk about debelopment with developers</h2>
          <Button>
            <GitHub fill={colors.white} width={24} height={24} /> 
            Login with GitHub
          </Button>
        </section>
      </AppLayout>

      <style jsx>{`
        section{
          display: grid;
          place-items: center;
          place-content: center;
          height: 100%;
        }
        img{
          width: 7.5em;
          height: auto;
        }
        h1{
          padding:.1em;
          margin:.2em auto .1em;
          font-size: 36px;
          color: ${colors.primary};
          font-weight: 800;
        }
        h2{
          font-size: 1.3rem;
          text-align: center;
          padding:.2em 2em;
          margin:.1em .1em .5em;
          color: ${colors.secondary};
        }
      `}</style>
    </>
  )
}