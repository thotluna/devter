import useTimeAgo from "hooks/useTimeAgo"
import Link from "next/link"

export default function HeadingDevit({ title, date, href }) {
  const timeago = useTimeAgo(date)

  return (
    <>
      <div>
        <h2>{title}</h2>
        <Link href={`/status/[id]`} as={href}>
          <a>{timeago}</a>
        </Link>
      </div>
      <style jsx>{`
        div {
          width: 100%;
           {
            /* display: flex;
          align-items: center;
          justify-content: space-between; */
          }
          margin: 0;
          padding: 0;
        }
        h2 {
          font-size: 1.2rem;
          margin: 0;
          padding: 0;
          line-heignt: 1;
          display: inline-block;
          margin-right: 0.5rem;
        }
        h4 {
          font-size: 0.8rem;
          color: #ccc;
          margin: 0;
          padding: 0;
          line-heignt: 1;
        }
        a {
          font-size: 0.8rem;
          color: #ccc;
          margin: 0;
          padding: 0;
          line-heignt: 1;
        }
      `}</style>
    </>
  )
}
