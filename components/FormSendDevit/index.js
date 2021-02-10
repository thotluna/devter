import { useCallback, useState } from "react"
import { useRouter } from "next/router"

import Button from "components/Buttom"
import ImageComponent from "components/ImageComponent"

import { addDevit } from "firebase/client"

import useUser from "hooks/useUser"
import useUploadImage, { DRAG_IMAGE_STATE } from "hooks/useUploadImage"

const COMPOSE_STATE = {
  USER_NOT_NKOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: 1,
}

export default function FormSendDevit() {
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(COMPOSE_STATE.USER_NOT_NKOW)

  const {
    drag,
    imgURL,
    setImgURL,
    handleDragEnter,
    handleDragLeave,
    handledrog,
  } = useUploadImage()

  const user = useUser()
  const router = useRouter()

  const habdleSubmit = (event) => {
    event.preventDefault()
    setStatus(COMPOSE_STATE.LOADING)
    addDevit(user.id, user.username, user.avatar, message, imgURL)
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
      <form onSubmit={habdleSubmit}>
        <textarea
          onChange={handleOnchange}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handledrog}
          value={message}
          placeholder="que esta pasando?"
        ></textarea>
        {imgURL && (
          <ImageComponent src={imgURL} onClick={() => setImgURL(null)} />
        )}
        <Button disabled={isButtomDisabled}>Send</Button>
      </form>
      <style jsx>{`
        form {
          margin-left: 0.5em;
        }
        textarea {
          border: ${drag === DRAG_IMAGE_STATE.DRAG_OVER
            ? "3px dashed #09f"
            : "3px dashed transparent"};
          border-radius: 10px;
          font-size: 21px;
          min-height: 200px;
          padding: 0;
          outline: 0;
          resize: none;
          width: 100%;
        }
      `}</style>
    </>
  )
}
