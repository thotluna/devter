import Devit from "components/Devit"
import { firestore } from "firebase/admin"
import { useRouter } from "next/router"

export default function DevitPage(props) {
  const router = useRouter()
  console.log("loading", router.isFallback)
  if (router.isFallback) {
    console.log("loading", router.isFallback)
    return "Loading ..."
  }
  return <Devit {...props} />
}

export async function getStaticPaths() {
  return {
    // paths: [{ params: { id: "2qxnnAWLNGCQ4lvC90Ri" } }],
    paths: [],
    fallback: true,
  }
}

export async function getStaticProps(content) {
  const { params /*, res */ } = content
  const { id } = params

  return firestore
    .collection("devits")
    .doc(id)
    .get()
    .then((doc) => {
      const data = doc.data()
      const id = doc.id
      const { createdAt } = data

      const props = {
        ...data,
        id,
        createdAt: +createdAt.toDate(),
      }
      return { props }
    })
    .catch(() => {
      return { props: {} }
    })

  // const apiRes = await fetch(`http://localhost:3000/api/devit/${id}`)
  // if (apiRes.ok) {
  //   const props = await apiRes.json()
  //   return { props }
  // }
  // if (res) {
  //   res.writeHead(301, { location: "/home" }).end()
  // }
}
// export async function getServerSideProps(content) {
//   const { params, res } = content
//   const { id } = params

//   const apiRes = await fetch(`http://localhost:3000/api/devit/${id}`)
//   if (apiRes.ok) {
//     const props = await apiRes.json()
//     return { props }
//   }
//   if (res) {
//     res.writeHead(301, { location: "/home" }).end()
//   }
// }

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
