import Devit from "components/Devit"

export default function DevitPage(props) {
  console.log("id", props)
  return <Devit {...props} />
}

DevitPage.getInitialProps = (context) => {
  const { query, res } = context
  const { id } = query

  return fetch(`http://localhost:3000/api/devit/${id}`).then((apiRes) => {
    if (apiRes.ok) {
      return apiRes.json()
    }
    if (res) {
      res.writeHead(301, { location: "/home" }).end()
    }
  })
}
