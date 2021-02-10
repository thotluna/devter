import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApatUYVJCLp5wck5n9GsfKaTfZnGkx-8A",
  authDomain: "devter-210b3.firebaseapp.com",
  projectId: "devter-210b3",
  storageBucket: "devter-210b3.appspot.com",
  messagingSenderId: "739252841991",
  appId: "1:739252841991:web:f1ae7b102f8ffe1a0fc4a2",
  measurementId: "G-B8XH9LFXG6",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const mapUserFromFirebaseAuth = (user) => {
  if (!user) return null
  const { displayName, photoURL, uid } = user
  return {
    username: displayName,
    avatar: photoURL,
    id: uid,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = mapUserFromFirebaseAuth(user)
    onChange(normalizeUser)
  })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}

export const addDevit = (id, username, avatar, message) => {
  return db.collection("devits").add({
    id,
    username,
    avatar,
    message,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

export const fetchLatestDevits = () => {
  return db
    .collection("devits")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data

        return {
          ...data,
          id,
          createdAt: +createdAt.toDate(),
        }
      })
    })
}
