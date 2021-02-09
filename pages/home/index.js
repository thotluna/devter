import { useState, useEffect, memo } from "react"
import AppLayout from "components/AppLayout"
import Footer from "components/Footer"
import Header from "components/Header"
import Devit from "components/Devit"
import useUser from "hooks/useUser"

function PageHome() {
  const user = useUser()
  const [timeline, setTimeline] = useState([])
  useEffect(() => {
    user &&
      fetch("http://localhost:3000/api/statuses/home_timeline")
        .then((res) => res.json())
        .then(setTimeline)
  }, [user])

  return (
    <>
      <AppLayout>
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
              />
            )
          })}
        </section>
        <Footer />
      </AppLayout>
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
