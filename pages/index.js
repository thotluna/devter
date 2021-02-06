import Head from "next/head"
import { useEffect, useState } from "react"
import AppLayout from "../components/AppLayout"
import Button from "../components/Buttom"
import GitHub from "../components/Icons/GitHub"
import { colors } from "../styles/theme"

import { loginWithGitHub, onAuthStateChanged } from "../firebase/client"

import Avatar from "../components/Avatar"

export default function Home() {
  const [user, setUser] = useState(null)

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

  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="devter-logo.png" alt="Logo" />
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
          height: 100%;
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
