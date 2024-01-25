"use client"

import React, { useRef, useState } from 'react'
import { LuSendHorizonal } from "react-icons/lu";

const MsgInput = () => {

    const [msg, setMsg] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div className='flex justify-center gap-4 items-center w-full px-5'>
            <input ref={inputRef} type='text' className='text-whiten font-bold bg-[#31304D] px-3 py-1 border-2 border-whiten w-[95%] rounded-2xl outline-none 
            text-sm' placeholder="input msg..." onChange={e => {setMsg(e.target.value)}} onFocus={e => {e.currentTarget.placeholder = ""}} onBlur={ e => {e.currentTarget.placeholder = "input msg..."}}></input>
            <div className='rounded-full bg-[#31304D] border-whiten border-2 p-1 cursor-pointer hover:scale-110' onClick={(e) => {
                console.log(msg);
                inputRef.current ? inputRef.current.value = "" : "";
            }}>
                <LuSendHorizonal size={17} color={'rgb(182 187 196)'}/>
            </div>

        </div>
    )
}

export default MsgInput