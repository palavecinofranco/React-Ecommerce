
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC68HQdWgWCtaab3rcVF233IDce_NEQeUQ",
  authDomain: "reactecommerce-9a3cf.firebaseapp.com",
  projectId: "reactecommerce-9a3cf",
  storageBucket: "reactecommerce-9a3cf.appspot.com",
  messagingSenderId: "337075978003",
  appId: "1:337075978003:web:9abfdb36b3772c8f8c64e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function getProducts(){
    const productsRef = collection(db, "products")
    const snapshot = await getDocs(productsRef)

    const products = snapshot.docs.map((elem) => ({...elem.data(), id: elem.id}))
    return products
}

export async function getProduct(productId){
  const productsRef = collection(db, "products")
  const docRef = doc(productsRef, productId);
  const snapshot = await getDoc(docRef);
  return snapshot.data();
}

export default db;
