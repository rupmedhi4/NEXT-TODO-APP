'use client'
import style from '@/app/Components/Style/Addtodo.module.css'
import { useState } from 'react'
import DisplayTodo from '../Components/DisplayTodo'
import styles from '@/app/Components/Style/DisplayTodo.module.css'

export default function page() {
  const [todo, setTodo] = useState("")

  const showTodo = async () => {
    try {
      let response = await fetch("http://localhost:3000/api/addtodo", {
        method: "POST",
        body: JSON.stringify({ todo, completed: "false" }),
      })
      response = await response.json()
      if (response.success) {
        alert("Todo add successfully")
      } else {
        alert("Oops something went wrong")
      }

    } catch (error) {
      alert("something went wrong")
    }
  }

  return (
    <>
      <div className={style.main_div} >
     
        <input type="text" placeholder='Enter your today task' onChange={(e) => setTodo(e.target.value)} className={style.inputbox}/>
        <button onClick={showTodo}>Add todo</button>
      </div>

      <DisplayTodo/>
    </>
  )
}
