
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"

// Configuracion de firebase
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

export async function getOrder(orderId){
    const orderRef = collection(db, "order")
    const docRef = doc(orderRef, orderId);
    const snapshot = await getDoc(docRef);
    return snapshot.data();
  }

export async function getProductByCategory(category){
    const productRef = collection(db, "products")
    const q = query(productRef, where("category", "==", category))
    const snapshot = await getDocs(q)

    const products = snapshot.docs.map((elem) => ({...elem.data(), id: elem.id}))
    return products
}

export async function getFeaturedProducts(){
    const productRef = collection(db, "products")
    const q = query(productRef, where("featured", "==", true))
    const snapshot = await getDocs(q)
    const products = snapshot.docs.map((elem) => ({...elem.data(), id: elem.id}))
    return products;
}

export async function getOffProducts(){
    const productRef = collection(db, "products")
    const q = query(productRef, where("discount", ">", 0))
    const snapshot = await getDocs(q)
    const products = snapshot.docs.map((elem) => ({...elem.data(), id:elem.id}))
    return products;
}

export async function getProductByGenderAndOffert(gender){
    let products = []
    await getOffProducts().then(respuesta =>{
        products = respuesta
    })
    return products.filter((products => products.gender == gender))
}

export async function getProductByGenderAndCategory(gender, category){
    const productRef = collection(db, "products")
    const q = query(productRef, where("category", "==", category))
    const snapshot = await getDocs(q)
    const products = snapshot.docs.map((elem) => ({...elem.data(), id: elem.id}))
    const productsFilter = products.filter((products => products.gender == gender))
    return productsFilter;
}

export async function getShoesByLine(line){
    const productRef = collection(db, "products")
    const q = query(productRef, where("line", "==", line))
    const snapshot = await getDocs(q)
    const products = snapshot.docs.map((elem) => ({...elem.data(), id: elem.id}))
    return products;
}

export async function getProductByCategoryAndOffert(category){
    let products = []
    await getOffProducts().then(respuesta =>{
        products = respuesta
    })
    return products.filter((products => products.category == category))
}

export async function exportArray(){
  const products = [
    {   
        idProduct:1,
        title: "Remera Sportswear",
        category: "indumentaria",
        price: 4500,
        detail: "Remera Nike línea Sportswear color roja, de algodón",
        image: "https://http2.mlstatic.com/D_NQ_NP_785063-MLA53068887277_122022-O.webp",
        stock: 15,
        quantity: 0,
        discount: 25,
        featured: true,
        gender: "hombre"
    },
    {
        idProduct:2,
        title: "Short Sportwear",
        category: "indumentaria",
        price: 7000,
        detail: "Short Nike línea Sportswear color negro con bolsillos",
        image: "https://http2.mlstatic.com/D_NQ_NP_955101-MLA53069202226_122022-O.webp",
        stock: 15,
        quantity: 0,
        discount: 0,
        featured: false,
        gender: "hombre"
    },
    {
        idProduct:3,
        title: "Zapatillas AIR FORCE 1 SHADOW",
        category: "calzados",
        price: 58000,
        detail: "Zapatillas Nike Air Force 1 Shadow para mujer color blanca",
        image: "https://stockx.imgix.net/Nike-Air-Force-1-Shadow-Triple-White-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&q=90&dpr=2&trim=color&updated_at=1603481985",
        stock: 15,
        quantity: 0,
        discount: 30,
        featured: true,
        gender: "mujer",
        line: "nike"
    },
    {
        idProduct:4,
        title: "Gorra Dri-fit Legacy 91 Tech",
        category: "accesorios",
        price: 9000,
        detail: "Gorra Nike negra de tela",
        image: "https://http2.mlstatic.com/D_NQ_NP_771470-MLA53014738571_122022-O.webp",
        stock: 15,
        quantity: 0,
        discount: 0,
        featured: false,
        gender: "unisex"
    },
    {
        idProduct:5,
        title: "Riñonera Running Hydration 3.0",
        category: "accesorios",
        price: 15000,
        detail: "Riñonera Nike estilo deportiva negra, con bolsillo para botella",
        image: "https://http2.mlstatic.com/D_NQ_NP_955969-MLA48935917361_012022-O.webp",
        stock: 8,
        quantity: 0,
        discount: 5,
        featured: true,
        gender: "unisex"
    },
    {
        idProduct:6,
        title: "ZAPATILLAS AIR VAPORMAX",
        category: "calzados",
        price: 87000,
        detail: "Zapatillas Nike Air Vapormax de moda color negra",
        image: "https://essential.vtexassets.com/arquivos/ids/595770-800-auto?v=637945294230170000&width=800&height=auto&aspect=true",
        stock: 6,
        quantity: 0,
        discount: 0,
        featured: false,
        gender: "hombre",
        line: "nike"
    },
    {
        idProduct:7,
        title: "ZAPATILLAS AIR MAX 97",
        category: "calzados",
        price: 65000,
        detail: "Zapatillas Nike Air Max 97 de moda para hombre color blanca",
        image: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3f42949c/products/NI_DM0027-100/NI_DM0027-100-1.JPG",
        stock: 5,
        quantity: 0,
        discount: 15,
        featured: true,
        gender: "hombre",
        line: "nike"
    },
    {
        idProduct:8,
        title: "Zapatillas Air Max Furyosa",
        category: "calzados",
        price: 65000,
        detail: "Zapatillas Nike Air Max Furyosa de mujer",
        image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw79114c7c/products/NI_CZ4149-200/NI_CZ4149-200-1.JPG",
        stock: 5,
        quantity: 0,
        discount: 0,
        featured: true,
        gender: "mujer",
        line: "nike"
    },
    {
        idProduct:9,
        title: "LLAVERO LANYARD",
        category: "accesorios",
        price: 4500,
        detail: "Llavero deportivo Nike LANYARD unisex color rosa",
        image: "https://www.digitalsport.com.ar/files/products/5fdb4db038ff3-527041-500x500.jpg",
        stock: 100,
        quantity: 0,
        discount: 0,
        featured: false,
        gender: "unisex"
    }
]

  for(let product of products){
    addDoc(collection(db, "products"), product);
    }
}

export async function createOrder(order){
    const orderRef = collection(db, "order")
    let respuesta = await addDoc((orderRef), order)
    return respuesta.id
}


export default db;
