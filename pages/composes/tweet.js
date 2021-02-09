import { useCallback, useState } from "react"
import AppLayout from "components/AppLayout"
import Button from "components/Buttom"
import styles from "./styles"
import useUser from "hooks/useUser"
import { addDevit } from "firebase/client"
import { useRouter } from "next/router"

const COMPOSE_STATE = {
  USER_NOT_NKOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: 1,
}

export default function Composetweet() {
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(COMPOSE_STATE.USER_NOT_NKOW)
  const user = useUser()
  const router = useRouter()

  const habdleSubmit = (event) => {
    event.preventDefault()
    setStatus(COMPOSE_STATE.LOADING)
    addDevit(user.id, user.username, user.avatar, message)
      .then(router.push("/home"))
      .catch((err) => {
        setStatus(COMPOSE_STATE.ERROR)
        console.error(err)
      })
  }

  const isButtomDisabled = !message.length || status === COMPOSE_STATE.LOADING

  const handleOnchange = useCallback((event) => {
    const { value } = event.target
    setMessage(value)
  }, [])

  return (
    <>
      <AppLayout>
        <form onSubmit={habdleSubmit}>
          <textarea
            onChange={handleOnchange}
            value={message}
            placeholder="que esta pasando?"
          ></textarea>
          <Button disabled={isButtomDisabled}>Send</Button>
        </form>
      </AppLayout>
      <style jsx>{styles}</style>
    </>
  )
}
