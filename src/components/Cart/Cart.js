import { useSelector } from "react-redux"
import Header from "../Header/Header"
import Product from "../Product/Product"

import "./Cart.css"

function Cart(){

    const cart = useSelector(({cart}) => cart)

    return(
        <>
            <Header onCart/>
            <div className="containerCarrinho">
                <h2 id="tituloCarrinho">Carrinho</h2>
                <ul className="carrinho">
                    {cart.length === 0? (
                        <div className="divSemProduto">
                            <h3>Você não possui produtos no carrinho</h3>
                        </div>
                    ):(
                        cart.map((product,index) => (
                            <Product key={index} product={product} isRemovable/>
                        ))
                    )}
                </ul>
                <div className="infosCarrinho">
                    <div>
                        <p>Valor total:</p>
                        <p>R$ {cart.reduce((acc,product) => {
                            return acc + product.price * product.quant
                        }, 0).toFixed(2).replace(".",",")}
                        </p>
                    </div>
                    <div>
                        <p>Quantidade total:</p>
                        <p>{cart.reduce((acc,product) => {
                            return acc + product.quant
                        }, 0)}</p>
                    </div>
                </div>
                <button className="btnFinalizarCompra">Finalizar compra</button>
            </div>
        </>
    )
}

export default Cart