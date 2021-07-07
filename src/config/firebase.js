import firebase from "firebase/app"

require("firebase/auth")
require("firebase/firestore")

export const firebaseConfig = {}

firebase.initializeApp(firebaseConfig)

export default firebase
