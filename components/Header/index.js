import Avatar from "components/Avatar"
import Button from "components/Buttom"

import styles from "./styles"

export default function Header({ src }) {
  return (
    <>
      <div>
        <Avatar src={src || "/devter-logo.png"} width={30} height={30} />
        <h1>Inico</h1>
        <Button>X</Button>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}
