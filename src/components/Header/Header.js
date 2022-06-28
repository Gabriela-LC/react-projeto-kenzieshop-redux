import {BsCart} from "react-icons/bs"
import {AiOutlineHome} from "react-icons/ai"

import {useHistory} from "react-router-dom"

import "./Header.css"
import { useSelector } from "react-redux"

function Header({onCart = false}){

    const history = useHistory()

    const cart = useSelector(({cart}) => cart)
    console.log(cart);

    return(
        <header>
            <h1>Kenzie Shop</h1>
            {onCart? (
                <AiOutlineHome className="headerIcon" color="white" onClick={() => history.push("/")}/>
            ):(
                cart.length > 0? (
                    <button>
                        <BsCart className="headerIcon" color="white" onClick={() => history.push("/cart")}/>
                        <div className="qtCartIcon">
                            <p>{cart.reduce((acc,product) => {
                            return acc + product.quant
                        }, 0)}</p>
                        </div>
                    </button>
                ):(
                    <BsCart className="headerIcon" color="white" onClick={() => history.push("/cart")}/>
                ))}
                
        </header>
    )
}

export default Header