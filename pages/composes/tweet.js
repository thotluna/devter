import Seo from "components/Seo"
import Avatar from "components/Avatar"
import FormSendDevit from "components/FormSendDevit"

import useUser from "hooks/useUser"

export default function Composetweet() {
  const user = useUser()

  return (
    <>
      <Seo title="Create Devit | Devter" />
      <div>
        {user && <Avatar src={user.avatar} width={48} height={48} />}
        <FormSendDevit />
      </div>
      <style jsx>{`
        div {
          display: flex;
          align-items: start;
          margin: 1em;
        }
      `}</style>
    </>
  )
}
