import { useDispatch } from "react-redux"
import { addToCartThunk, removeFromCartThunk } from "../../store/modules/cart/thunks"

import "./Product.css"

function Product({product, isRemovable = false}){

    const dispatch = useDispatch()

    const {id, name, price, quant, image} = product

    return(
        <li>
            <figure>
                <img src={image} alt={name}/>
            </figure>
            <div className="infoProd">
                <h2>{name}</h2>
                <p>R$ {price.toFixed(2).replace(".",",")}</p>
                {isRemovable?(
                <>
                    <p>x{quant}</p>
                    <button onClick={() => dispatch(removeFromCartThunk(id))}>Remover</button>
                </>
                ):(
                <button onClick={() => dispatch(addToCartThunk(product))}>Adicionar ao carrinho</button>
                )}
            </div>
        </li>
    )
}

export default Product