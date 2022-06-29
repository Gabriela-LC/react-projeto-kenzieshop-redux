const defaultState = [
    {id: 1, name: "Echo Dot (4ª Geração)", price: 399.00, quant: 1, image: "https://imgs.casasbahia.com.br/55015680/1xg.jpg?imwidth=500"},
    {id: 2,name: "Kindle (10ª Geração)", price: 449.00, quant: 1, image: "https://images-na.ssl-images-amazon.com/images/I/71wpB3KIVKL.__AC_SX300_SY300_QL70_ML2_.jpg"},
    {id: 3,name: "Echo Dot (3ª Geração)", price: 331.00, quant: 1, image: "https://m.media-amazon.com/images/I/41GZCWFJB1L._AC_.jpg"},
    {id: 4,name: "Fire TV Stick Lite", price: 227.00, quant: 1, image: "https://m.media-amazon.com/images/I/41yI07Cs9UL._AC_SX679_.jpg"},
    {id: 5,name: "Echo Buds (2ª Geração)", price: 854.00, quant: 1,image: "https://m.media-amazon.com/images/I/41xQKlqYxNL._AC_SX679_.jpg"},
    {id: 6,name: "Echo Show 5 (2ª Geração)", price: 569.00, quant: 1, image: "https://m.media-amazon.com/images/I/71fzcZQlbqS._AC_SX679_.jpg"},
    {id: 7,name: "Echo Studio", price: 1614.00, quant: 1, image: "https://m.media-amazon.com/images/I/611I8j+AAzL._AC_SX679_.jpg"}

]


function productsReducer(state = defaultState, action){

    return state
}

export default productsReducer