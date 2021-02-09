import AppLayout from "components/AppLayout"
import Button from "components/Buttom"

export default function Composetweet() {
  const habdleSubmit = () => {}

  const handleOnClick = () => {}

  return (
    <>
      <AppLayout>
        <form onSubmit={habdleSubmit}>
          <textarea placeholder="que esta pasando?"></textarea>
          <Button onClick={handleOnClick}>Send</Button>
        </form>
      </AppLayout>
      <style jsx>{`
        form {
          margin: 0.5em 1em;
        }
        textarea: {
          widht: 100%;
          height: 30vh;
        }
      `}</style>
    </>
  )
}
