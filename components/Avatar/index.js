import React from "react"
import styles from "./styles"

export default function Avatar({ src, username = "user", width = 32 }) {
  return (
    <>
      <div>
        <img src={src} width={width} alt={`Avatar of ${username}`} />
        {username !== "user" ? <h2>{username}</h2> : null}
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
