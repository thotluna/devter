import { useState, useEffect, memo } from "react"
import Footer from "components/Footer"
import Header from "components/Header"
import Devit from "components/Devit"
import useUser from "hooks/useUser"
import { fetchLatestDevits } from "firebase/client"
import Head from "next/head"

function PageHome() {
  const user = useUser()
  const [timeline, setTimeline] = useState([])
  useEffect(() => {
    user && fetchLatestDevits().then(setTimeline)
  }, [user])

  return (
    <>
      <Head>
        <title>Inicio | Devter</title>
      </Head>
      <Header src={user && user.avatar} />
      <section>
        {timeline.map((devit) => {
          return (
            <Devit
              key={devit.id}
              id={devit.id}
              avatar={devit.avatar}
              username={devit.username}
              name={devit.name}
              message={devit.message}
              img={devit.img}
              createdAt={devit.createdAt}
              likesCount={devit.likesCount}
              sharedCount={devit.sharedCount}
            />
          )
        })}
      </section>
      <Footer />
      <style jsx>{`
        section {
          padding: 0.5em 1em 4em;
        }
        Header {
        }
      `}</style>
    </>
  )
}

export default memo(PageHome)
