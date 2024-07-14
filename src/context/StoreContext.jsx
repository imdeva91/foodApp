import {createContext,  useEffect,  useState} from "react";
import { food_list } from "../assets/assets";
import { auth, db } from "../firebase/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const StoreContext = createContext(null)

const StoreContextProvider =(props)=>{
    const naviagter = useNavigate()

    const [cartItems,setCartItems]=useState([]);
    const [userDetails,setUserDeteails] = useState(null)

    const fetchUserData =async()=>{
auth.onAuthStateChanged(async (user)=>{
    console.log(user)
    const docRef = doc(db,"users",user.uid);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists())
    {
        setUserDeteails(docSnap.data())
        console.log(docSnap.data())
    }else{
        setUserDeteails(null)
    }
})
    }
useEffect(()=>{
    fetchUserData()
},[userDetails])
    const addToCart=(itemId)=>{
        if(!cartItems[itemId])
            {
                setCartItems((prev)=>({...prev,[itemId]:1}))
            }
            else{
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmmount = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        let itemInfo = food_list.find((product)=>product._id === item);
                        totalAmmount += itemInfo.price*cartItems[item];
                    }
            }
            return totalAmmount;
    }

    const userLogOut =async()=>{
        console.log("first")
       await auth.signOut();
        naviagter('/login')
    }

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        userDetails,
        userLogOut
    }

    return(
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;