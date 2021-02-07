import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import AppLayout from "components/AppLayout"
import Button from "components/Buttom"
import GitHub from "components/Icons/GitHub"
import { colors } from "styles/theme"

import { loginWithGitHub, onAuthStateChanged } from "../firebase/client"

import Avatar from "../components/Avatar"
import Logo from "components/Icons/Logo"

export default function Home() {
  const [user, setUser] = useState(null)
  const router = useRouter()

  const handleLogin = () => {
    setUser(undefined)
    loginWithGitHub()
      .then((user) => {
        setUser(user)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    setUser(undefined)
    console.log("user:", user)
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user && router.replace("/home")
  }, [user])

  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <Logo fill={colors.secondary} width={120} />
          <h1>Devter</h1>
          <h2>Talk about debelopment with developers</h2>
          {user === null && (
            <Button onClick={handleLogin}>
              <GitHub fill={colors.white} width={24} height={24} />
              Login with GitHub
            </Button>
          )}
          {user && user.username && (
            <div>
              <Avatar src={user.avatar} username={user.username} />
            </div>
          )}
        </section>
      </AppLayout>

      <style jsx>{`
        section {
          display: grid;
          place-items: center;
          place-content: center;
          height: 100vh;
        }
        img {
          width: 7.5em;
          height: auto;
        }
        h1 {
          padding: 0.1em;
          margin: 0.2em auto 0.1em;
          font-size: 36px;
          color: ${colors.primary};
          font-weight: 800;
        }
        h2 {
          font-size: 1.3rem;
          text-align: center;
          padding: 0.2em 2em;
          margin: 0.1em 0.1em 0.5em;
          color: ${colors.secondary};
        }
      `}</style>
    </>
  )
}
