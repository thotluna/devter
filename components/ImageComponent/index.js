export default function ImageComponent({ src, onClick = null }) {
  return (
    <>
      <picture>
        {onClick && <button onClick={onClick}>X</button>}
        <img src={src} />
      </picture>
      <style jsx>{`
        picture {
          position: relative;
        }
        button {
          position: absolute;
          width: 24px;
          height: 24px;
          display: flex;
          aling-items: center;
          justify-content: center;
          top: 15px;
          right: 15px;
          padding: 0.3em;
          background: rgba(0, 0, 0, 0.6);
          border: none;
          border-radius: 50%;
          color: white;
        }
        img {
          width: 80%;
          height: auto;
          border-radius: 10px;
        }
      `}</style>
    </>
  )
}
