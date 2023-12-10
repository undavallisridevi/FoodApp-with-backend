import { createContext, useState } from "react";

export const UserProgressContext=createContext({
    progress:'',
    showCart:()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{}
    

})
export function UserProgressContextProvider({children}){
    const [userprogress,setUserProgress]=useState('');
    function showCart()
    {
        setUserProgress('cart');
    }
    function hideCart()
    {
        setUserProgress('');
    }
    function showCheckout()
    {
        setUserProgress('checkout');
    }
    function hideCheckout()
    {
        setUserProgress('')
    }
    const userProgressctx={
        progress:userprogress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    }
    return <UserProgressContext.Provider value={userProgressctx}>{children}</UserProgressContext.Provider>
}