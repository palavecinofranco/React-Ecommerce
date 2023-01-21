
const products = [
    {   
        id: 1,
        title: "Remera Sportswear",
        category: "indumentaria",
        price: 4500,
        detail: "Remera Nike línea Sportswear color roja, de algodón",
        image: "https://http2.mlstatic.com/D_NQ_NP_785063-MLA53068887277_122022-O.webp",
        stock: 15,
        quantity: 0
    },
    {
        id: 2,
        title: "Short Sportwear",
        category: "indumentaria",
        price: 7000,
        detail: "Short Nike línea Sportswear color negro con bolsillos",
        image: "https://http2.mlstatic.com/D_NQ_NP_955101-MLA53069202226_122022-O.webp",
        stock: 15,
        quantity: 0
    },
    {
        id: 3,
        title: "Zapatillas Air Max 97 Lil Nas",
        category: "calzados",
        price: 58000,
        detail: "Zapatillas Nike Air Max 97 colaboración con Lil Nas, negra y roja",
        image: "https://http2.mlstatic.com/D_NQ_NP_906663-MLA53062508589_122022-O.webp",
        stock: 15,
        quantity: 0
    },
    {
        id: 4,
        title: "Gorra Dri-fit Legacy 91 Tech",
        category: "accesorios",
        price: 9000,
        detail: "Gorra Nike negra de tela",
        image: "https://http2.mlstatic.com/D_NQ_NP_771470-MLA53014738571_122022-O.webp",
        stock: 15,
        quantity: 0
    },
    {
        id: 5,
        title: "Riñonera Running Hydration 3.0",
        category: "accesorios",
        price: 15000,
        detail: "Riñonera Nike estilo deportiva negra, con bolsillo para botella",
        image: "https://http2.mlstatic.com/D_NQ_NP_955969-MLA48935917361_012022-O.webp",
        stock: 8,
        quantity: 0
    },
    {
        id: 6,
        title: "ZAPATILLAS AIR VAPORMAX",
        category: "calzados",
        price: 87000,
        detail: "Zapatillas Nike Air Vapormax de moda color negra",
        image: "https://essential.vtexassets.com/arquivos/ids/595770-800-auto?v=637945294230170000&width=800&height=auto&aspect=true",
        stock: 6,
        quantity: 0
    },
    {
        id: 7,
        title: "ZAPATILLAS AIR MAX 97",
        category: "calzados",
        price: 65000,
        detail: "Zapatillas Nike Air Max 97 de moda para hombre color blanca",
        image: "https://essential.vtexassets.com/arquivos/ids/683075-800-auto?v=638095068858000000&width=800&height=auto&aspect=true",
        stock: 10,
        quantity: 0 
    },
    {
        id: 8,
        title: "Zapatillas Air Max Furyosa",
        category: "calzados",
        price: 65000,
        detail: "Zapatillas Nike Air Max Furyosa de mujer",
        image: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw79114c7c/products/NI_CZ4149-200/NI_CZ4149-200-1.JPG",
        stock: 6,
        quantity: 0
    },
    {
        id: 9,
        title: "LLAVERO LANYARD",
        category: "accesorios",
        price: 4500,
        detail: "Llavero deportivo Nike LANYARD unisex color rosa",
        image: "https://www.digitalsport.com.ar/files/products/5fdb4db038ff3-527041-500x500.jpg",
        stock: 100,
        quantity: 0 
    }
];

const getProductByCategory = (categoryUrl) =>{

    return new Promise((resolve, reject) =>{
        let reqProduct = products.filter(product => product.category === categoryUrl)

        setTimeout(()=>{
            resolve(reqProduct)
        }, 2000)
    })

}

export { getProductByCategory } ;
