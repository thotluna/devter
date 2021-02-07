import { useState, useEffect } from "react"

import AppLayout from "components/AppLayout"
import Footer from "components/Footer"
import Header from "components/Header"
import Devit from "components/Devit"

export default function PageHome() {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <>
      <AppLayout>
        <Header />
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
          padding: 0.5em 1em;
        }
        Header {
        }
      `}</style>
    </>
  )
}
