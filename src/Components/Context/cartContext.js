import { createContext,useState } from "react";
export const CartContext = createContext(0);
export const CartProvider = ({children})=>{
const [productList,setProductList] = useState([])
const addToList = (producto)=>{
    setProductList((listaVieja)=>[...listaVieja,producto])
}
    return(
        <CartContext.Provider value={{addToList,productList}}>
            {children}
        </CartContext.Provider>
        )};