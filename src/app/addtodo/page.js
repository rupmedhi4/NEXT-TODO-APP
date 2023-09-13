'use client'
import style from '@/app/Components/Style/Addtodo.module.css'
import { useState } from 'react'

export default function page() {
    const [todo, setTodo]= useState("")

    const showTodo = ()=>(
        alert(todo)
    )

  return (
    <>
    <div className={style.main_div}>
        <input type="text" placeholder='Enter your today task' onChange={(e)=>setTodo(e.target.value)}/>
        <button onClick={showTodo}>Add todo</button>
 
    </div>
    </>
  )
}
