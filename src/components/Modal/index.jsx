import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";



const Modal = () => {
    const [modal, setModal] = useState("")
    const [pass, setPass] = useState(false)
    const nav = useNavigate()
    function getModal() {
        if(modal == "Isekender" ){
            nav("/Obj   ")
        }
        else{
            alert("Не правильный пароль")
        }
    }
    return (
        <div id='modal'>
            <div className="container">
                <div className="modal">
                <input type={pass ? "text" : "password"} onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        nav("/Obj")
                    }
                }} onChange={(e) => setModal(e.target.value)} placeholder={pass ? "text" : "password"} />
                <button onClick={getModal}>Подтвердить</button>
                <div className="flex  ">
                {pass ? <a onClick={() => setPass(false)} className="absolute top-[60px] left-[285px] text-[30px] text-[grey]" >
                <IoEyeSharp />
                </a>:
                <a onClick={() => setPass(true)} className="absolute top-[60px] left-[285px] text-[30px] text-[black]">
                <BsEyeSlashFill />

                </a>}
                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Modal;