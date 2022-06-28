import { addToCart, removeFromCart } from "./actions"

export function removeFromCartThunk(id){
    return (dispatch, getStore) => {

        const { cart } = getStore()

        let prodEncontrado = cart.find((element) => {
            return element.id === id
        })

        if(prodEncontrado.quant === 1){
            const newList = cart.filter((product) => {
                return product.id !== id
            })

            localStorage.setItem("cart", JSON.stringify(newList))
            dispatch(removeFromCart(newList))
        } else{
            prodEncontrado.quant -= 1
            const newList = [...cart]
            localStorage.setItem("cart", JSON.stringify(newList))
            dispatch(removeFromCart(newList))

        }

    }
}

export function addToCartThunk(product){
    return (dispatch) => {

        const list = JSON.parse(localStorage.getItem("cart")) || []


        let prodEncontrado = list.find((element) => {
            return element.id === product.id
        })

        if(prodEncontrado){
            prodEncontrado.quant += 1
        } else{
            list.push(product)
        }
        
        localStorage.setItem("cart", JSON.stringify(list))

        dispatch(addToCart(list))
    }
}