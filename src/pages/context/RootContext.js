import React, { useEffect, useState } from 'react';
import { SportShop } from './useContext';
import axios from "axios"

const RootContext = ({children}) => {

    const API = 'http://localhost:3000/data'
    const newAPI = "https://fakestoreapi.com/products/"


    const [admin, setAdmin] = useState([])
    const [productmain, setProductmain] = useState([])
    const [favorit, setFavorit] = useState([])
    const [basket, setBasket] = useState([])

    function MainAPI(newProduct){
        axios.post(API, newProduct)
        
    }
    
    function myAPI(){
        axios(API).then((data) => {
            setAdmin(data.data)
            MainAPI()
        })
    }
    const getMain = async ()=>{
        let {data} = await axios(newAPI)
        setProductmain(data)
        console.log(data);
        MainAPI()
    }
    
    function RootLocal(){

        let favLoc = JSON.parse(localStorage.getItem("store")) || []
        let basketLocal = JSON.parse(localStorage.getItem("basketProduct")) || []
        
        setBasket(basketLocal)
        setFavorit(favLoc)
    }
    
    
    useEffect(() => {
        getMain()
        RootLocal()
        MainAPI()
        myAPI()
        SelectOption()

    },[])



    function SelectOption(sel) {
        if (sel == "a-z"){
           let sort1 = [...productmain].sort((a,b) => a.title.localeCompareё(b.title))
           setProductmain(sort1)
        }
        else if(sel == "z-a"){
            let sort2 = [...productmain].sort((b,a) =>
                 b.title.localeCompare(a.title))
            setProductmain(sort2)
        }
        else if(sel == "1-0"){
           let sort3 = [...productmain].sort((a, b) => a.price - +b.price)
           setProductmain(sort3)
        }
        else if(sel == "0-1"){
            let sort4 = [...productmain].sort((a, b) => a.price - +b.price)
            setProductmain(sort4)
        }
    }
  


    const incriment = (data) =>  {

        let changeBasket = basket.map((el) => 
        el.id === data.id ? {...el, quantity: el.quantity + 1}: el
    )
    localStorage.setItem("basketProduct", JSON.stringify(changeBasket))
    setBasket(changeBasket)
        }
        const decriment = (data) =>  {
            let changeBasket = basket.map((el) => 
            el.id === data.id ? {...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }: el
        )
    localStorage.setItem("basketProduct", JSON.stringify(changeBasket))

        setBasket(changeBasket)
            }
            function deleteBasket(data) {
        let basketLocal = JSON.parse(localStorage.getItem("basketProduct")) || []
                let res = basketLocal.filter((el) => el.id !== data.id)
                setBasket(res)
                localStorage.setItem("basketProduct", JSON.stringify(res))
                getMain()
            }
            function deltetFav(data){
        let favLoc = JSON.parse(localStorage.getItem("store")) || []
        let result = favLoc.filter((el) => el.id !== data.id )
                setFavorit(result)
                localStorage.setItem("store", JSON.stringify(result))
                getMain()

            }
        return (
        <SportShop.Provider
         value={{
            admin,
            productmain,
            favorit,
            basket,

            setBasket,
            setFavorit,
            setProductmain,
            setAdmin,

            myAPI,
            deltetFav,
            deleteBasket,
            incriment,
            decriment,
            SelectOption,
            getMain,
            RootLocal,
            MainAPI,

        }}>
            {children}
        </SportShop.Provider>
    );
};

export default RootContext;