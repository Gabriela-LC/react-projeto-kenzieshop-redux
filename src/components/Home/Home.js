import {useSelector} from "react-redux"
import Header from "../Header/Header"
import Product from "../Product/Product"

import "./Home.css"

function Home(){

    const products = useSelector(({products}) => products)

    return(
        <>
            <Header/>
            <ul className="vitrine">
            {products.map((product) => (
                <Product key={product.id} product={product}/>
            ))}
            </ul>
        </>
    )
}

export default Home