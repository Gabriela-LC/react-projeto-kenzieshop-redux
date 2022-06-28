
function cartReducer(state = JSON.parse(localStorage.getItem("cart")) || [], action){

    switch (action.type){

        case "REMOVE_CART":
            return action.list

        case "ADD_CART":
            return action.list

        default:
            return state

    }        
}

export default cartReducer