export default function HeadingDevit({ title, date }) {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <h4>{date}</h4>
      </div>
      <style jsx>{`
        div {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0;
          padding: 0;
        }
        h2 {
          font-size: 1.2rem;
          margin: 0;
          padding: 0;
          line-heignt: 1;
        }
        h4 {
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
