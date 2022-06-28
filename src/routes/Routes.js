import {Switch, Route} from "react-router-dom"
import Cart from "../components/Cart/Cart"
import Home from "../components/Home/Home"

function Routes(){

    return(
        <Switch>
            <Route exact path="/">
               <Home/>
            </Route>
            <Route path="/cart">
                <Cart/>
            </Route>
        </Switch>
    )
}

export default Routes