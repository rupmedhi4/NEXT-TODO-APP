'use client'
import React, { useEffect, useState } from 'react';
import style from '@/app/Components/Style/DisplayTodo.module.css';

export default function DisplayTodo() {
  const [showTodo, setShowTodo] = useState([]);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`http://localhost:3000/api/addtodo`);
        response = await response.json();
        setShowTodo(response.result);
      } catch (error) {
        alert("something went wrong");
      }
    };
    fetchData();
  }, []);
  return (
    <div className={style.main_div}>
      {showTodo.map((data) => (
        <div key={data._id} className={style.inner_div}>
          <span>{data.todo}</span>
          <div className={style.pending_div}>
            <span>{data.completed === "true" ? "Completed" : "Pending"}</span>
          </div>
          <div className={style.delete_div}>
            <button className={style.deleteBtn}>Delete</button>
            <button className={style.completeBtn} onClick={() => setComplete(true)}>Incomplete</button>
          </div>
        </div>
      ))}
    </div>


  );
}
