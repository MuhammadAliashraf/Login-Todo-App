import app from "./firebaseconfig";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database"


const auth = getAuth(app);
const database = getDatabase(app);

let userSignUp = (obj) => {
      let { email , password } = obj;
      return new Promise((resolve, reject) => {
            createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                        const user = userCredential;
                        const myref = ref(database, `user/${user.user.uid}`);
                        set(myref, obj).then(()=>{
                              resolve("User Done")
                        }).catch((eror)=>{
                              reject(eror)
                        })
                  })
                  .catch((error) => {
                        reject(error)
                  })
      })
}

const handleLogin = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password)
} 


export { userSignUp, handleLogin }