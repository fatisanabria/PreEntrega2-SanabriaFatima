import { createContext,useState } from "react";
export const cartContext = createContext(0);
export const cartProvider = ({children})=>{
const [productList,setProductList] = useState([])
const addToList = (producto)=>{
    setProductList((listaVieja)=>[...listaVieja,producto])
}
    return(
        <cartContext.Provider value={{addToList,productList}}>
            {children}
        </cartContext.Provider>
        )};