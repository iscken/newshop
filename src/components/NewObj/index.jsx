import React, { useContext, useState } from 'react';
import "./Newobj.css"
import { SportShop } from '../../pages/context/useContext';
import { useNavigate } from 'react-router-dom';

const Obj = () => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [img, setImg] = useState("")
const [category, setCategory] = useState("")
const [number, setNumber] = useState("")
const nav = useNavigate()

const { MainAPI } = useContext(SportShop)

function NewObj() {
    if(name === "" ||
    age === "" ||
    img ==="" ||
    category === "" || 
    number === ""
){
    alert("404")
}else
    {
        let obj = {
            name,
            img,
            age,
            category,
            number,
        }
        MainAPI(obj)
    }
 
    setAge("")
    setImg("")
    setName("")
    setNumber("")
    setCategory("")

}
    return (
        <div id="Obj">

        <div className='container'>
            <div className="obj">

            <input type="text" onChange={(e) => setImg(e.target.value)} placeholder='Image'/>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder='Name'/>
            <input type="text" onChange={(e) => setAge(e.target.value)} placeholder='age'/>
            <input type="text" onChange={(e) => setCategory(e.target.value)} placeholder='category'/>
            <input type="text" onKeyDown={(e) => 
                {if(e.key === "Enter"){
                    NewObj()
                }
            }} onChange={(e) => setNumber(e.target.value)} placeholder='Number'/>
            <button onClick={() => NewObj()}>Добавть</button>
        <button className='btn2' onClick={() => nav("/getAdmin")}>Показать</button>

        </div>
            </div>
            
            </div>
    );
};

export default Obj;