import { useState, useEffect } from "react"

import { uploadImage } from "firebase/client"

export const DRAG_IMAGE_STATE = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
}

export default function useUploadImage() {
  const [imgURL, setImgURL] = useState(null)

  const [drag, setDrag] = useState(DRAG_IMAGE_STATE.NONE)
  const [task, setTask] = useState(null)

  const handleDragEnter = (event) => {
    event.preventDefault()
    setDrag(DRAG_IMAGE_STATE.DRAG_OVER)
  }
  const handleDragLeave = (event) => {
    event.preventDefault()
    setDrag(DRAG_IMAGE_STATE.none)
  }
  const handledrog = (event) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    setTask(uploadImage(file))
    setDrag(DRAG_IMAGE_STATE.none)
  }

  useEffect(() => {
    if (task) {
      const onProgress = () => {}
      const onError = () => {}
      const onComplete = () => {
        task.snapshot.ref.getDownloadURL().then(setImgURL)
      }
      task.on("state_changed", onProgress, onError, onComplete)
    }
  }, [task])

  return {
    imgURL,
    setImgURL,
    drag,
    handleDragEnter,
    handleDragLeave,
    handledrog,
    task,
  }
}
