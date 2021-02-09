import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { onAuthStateChanged } from "../firebase/client"

export const STATUS_USER = {
  NOT_LOGGED: null,
  DONT_NKOW: undefined,
}

export default function useUser() {
  const [user, setUser] = useState(STATUS_USER.DONT_NKOW)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === STATUS_USER.NOT_LOGGED && router.push("/")
  }, [user])

  return user
}
