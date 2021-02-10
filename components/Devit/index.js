import Avatar from "components/Avatar"
import Flex from "components/Flex"
import FooterDevit from "components/FooterDevit"
import HeadingDevit from "components/HeadingDevit"
import ImageComponent from "components/ImageComponent"
import { useRouter } from "next/router"

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
  const route = useRouter()

  const handleOnClick = (e) => {
    e.preventDefault()
    route.push("/status/[id]", `/status/${id}`)
  }

  return (
    <>
      <article onClick={handleOnClick}>
        <Flex direction="row" alingItem="start">
          <Avatar width={49} src={avatar} alt={username} />
          <Flex direction="column">
            <div>
              <HeadingDevit
                href={`status/${id}`}
                title={name || username}
                date={createdAt}
              />
              <p>{message}</p>
              {img && <ImageComponent src={img} onClick={null} />}
            </div>
          </Flex>
        </Flex>
        <FooterDevit />
      </article>
      <style jsx>{styles}</style>
    </>
  )
}
