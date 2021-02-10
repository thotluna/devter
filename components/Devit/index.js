import Avatar from "components/Avatar"
import Flex from "components/Flex"
import FooterDevit from "components/FooterDevit"
import HeadingDevit from "components/HeadingDevit"

import styles from "./styles"

export default function Devit({
  id,
  avatar,
  username,
  name,
  message,
  img,
  createdAt,
  likesCount,
  sharedCount,
}) {
  return (
    <>
      <article>
        <Flex direction="row" alingItem="start">
          <Avatar width={49} src={avatar} alt={username} />
          <Flex direction="column">
            <div>
              <HeadingDevit title={name || username} date={createdAt} />
              <p>{message}</p>
              {img && <img src={img} />}
            </div>
          </Flex>
        </Flex>
        <FooterDevit />
      </article>
      <style jsx>{styles}</style>
    </>
  )
}
