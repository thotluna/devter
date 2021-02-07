import Avatar from "components/Avatar"

import styles from "./styles"

export default function Devit({ id, avatar, username, name, message }) {
  return (
    <>
      <article>
        <Avatar width={49} src={avatar} alt={username} />
        <div>
          <h3>{name || username}</h3>
          <p>{message}</p>
        </div>
      </article>
      <style jsx>{styles}</style>
    </>
  )
}
