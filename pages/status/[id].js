import Devit from "components/Devit"

export default function DevitPage(props) {
  return <Devit {...props} />
}

export async function getServerSideProps(content) {
  const { params, res } = content
  const { id } = params

  const apiRes = await fetch(`http://localhost:3000/api/devit/${id}`)
  if (apiRes.ok) {
    const props = await apiRes.json()
    return { props }
  }
  if (res) {
    res.writeHead(301, { location: "/home" }).end()
  }
}

// DevitPage.getInitialProps = (context) => {
//   const { query, res } = context
//   const { id } = query

//   return fetch(`http://localhost:3000/api/devit/${id}`).then((apiRes) => {
//     if (apiRes.ok) {
//       return apiRes.json()
//     }
//     if (res) {
//       res.writeHead(301, { location: "/home" }).end()
//     }
//   })
// }
