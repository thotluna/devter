import Avatar from "components/Avatar"

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
      <style jsx>{`
        article {
          padding: 10px;
          display: flex;
          align-items: start;
          border-bottom: 1px solid #d2d2d2;
        }
        div {
          margin-left: 10px;
        }
        h3 {
          margin: 0;
          padding: 0;
          line-height: 1;
        }
        p {
          font-size: 18px;
          margin: 0;
          padding: 0;
        }
      `}</style>
    </>
  )
}
