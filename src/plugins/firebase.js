import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDvPe992v4M_XU8M2kj5gC8WzW2l8iTdyg",
  authDomain: "orbita-db.firebaseapp.com",
  databaseURL: "https://orbita-db.firebaseio.com",
  projectId: "orbita-db",
  storageBucket: "orbita-db.appspot.com",
  messagingSenderId: "752721460140"
};

const connection = firebase.initializeApp(config)

const DB = connection.database()
const AUTH = connection.auth()

export default function install (Vue, { router }) {

  AUTH.onAuthStateChanged(user => {
    if (!user) {
      router.push({path: 'auth'})
    }
  })

  Object.defineProperties(Vue.prototype, {
    $db: {
      get () {
        return DB
      }
    },
    $auth: {
      get () {
        return AUTH
      }
    }
  })
}
