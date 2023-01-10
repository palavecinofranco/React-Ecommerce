
const products = [
    {   
        id: 1,
        title: "Remera Nike Sportswear",
        category: "indumentaria",
        price: 4500,
        detail: "Color rojo",
        image: "https://http2.mlstatic.com/D_NQ_NP_785063-MLA53068887277_122022-O.webp"
    },
    {
        id: 2,
        title: "Short Nike Sportwear",
        category: "indumentaria",
        price: 7000,
        detail: "Color negro",
        image: "https://http2.mlstatic.com/D_NQ_NP_955101-MLA53069202226_122022-O.webp"
    },
    {
        id: 3,
        title: "Zapatillas Nike Air Max 97 Lil Nas",
        category: "calzados",
        price: 58000,
        detail: "zapas",
        image: "https://http2.mlstatic.com/D_NQ_NP_906663-MLA53062508589_122022-O.webp"
    },
    {
        id: 4,
        title: "Gorra Dri-fit Legacy 91 Tech",
        category: "accesorios",
        price: 9000,
        detail: "gorra nike negra",
        image: "https://http2.mlstatic.com/D_NQ_NP_771470-MLA53014738571_122022-O.webp"
    },
    {
        id: 5,
        title: "Riñonera Running Hydration 3.0",
        category: "accesorios",
        price: 15000,
        detail: "riñonera deportiva",
        image: "https://http2.mlstatic.com/D_NQ_NP_955969-MLA48935917361_012022-O.webp"
    }
];

const getProducts = () =>{
    let error = false;

    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(error)
                reject();
            else
                resolve(products);
        }, 2000)
    })
}

const getProduct = (idUrl) =>{
    return new Promise((resolve, reject) =>{
        const reqProduct = products.find(product => product.id === parseInt(idUrl));
        setTimeout(()=>{
            if(reqProduct)
                resolve(reqProduct);
            else
                reject("No se encontro el producto")
        }, 2000)
    })
}


const getProductByCategory = (categoryUrl) =>{

    return new Promise((resolve, reject) =>{
        let reqProduct = products.filter(product => product.category === categoryUrl)

        setTimeout(()=>{
            resolve(reqProduct)
        }, 2000)
    })

}


export default getProducts;

export { getProduct, getProductByCategory } ;
