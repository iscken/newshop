import React, { useContext, useState } from 'react';
import { SportShop } from '../../pages/context/useContext';
import BasketCart from '../BasketCart';
import axios from 'axios';

const Basket = () => {
    const  {basket} = useContext(SportShop)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [num, setNum] = useState("")
    
    function addToTelegram() {
      let my_id = "6074156085"
      const token = "6887267044:AAEYtyTGdilkrMvezEB-1fu5ZUglcWuWy-g"
      const url_api = `https://api.telegram.org/bot${token}/sendMessage`
      let toTelegram = {
        chat_id: my_id,
        parse_model: "html",
        text:`
        iskender: 
        Name:${name}
        Age:${age}
        Number: ${num}
        `



      }
      axios.post(url_api, toTelegram)
    }
    let sumOfProduct = basket.reduce((acc, el) => acc + el.price * el.quantity, 0)

     
    return (
       <div id="basket">
         <div className='container'>
           <div className="basket">
           {
                basket.map((el) => <BasketCart el={el}/>)
            }
           </div>
           <h1 className='text-end pr-[200px] text-[black] text-2xl text-3xl'>Итог: {Math.floor(sumOfProduct)}</h1>
          <div className="inpToTltg">
          <div className=" inps">
            <input type="text" onChange={(e) => setName(e.target.value)}  placeholder='Name'/>
            <input type="text" onChange={(e) => setAge(e.target.value)}  placeholder='Age'/>
            <input type="text"
              onKeyDown={(e) => {
               if (e.key === 'Enter'){
                 addToTelegram()
               }
              }}
              
              
             onChange={(e) => setNum(e.target.value)}  placeholder='Number' />
            <button onClick={() => addToTelegram()}>Sabmit</button>
           </div>
          </div>
        
        </div>
       </div>
    );
};

export default Basket;