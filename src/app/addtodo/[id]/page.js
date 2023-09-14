'use client'
import React, { useEffect, useState } from 'react';
import style from '@/app/Components/Style/Addtodo.module.css';

export default function Page({ params }) {
  const [updateTodo, setUpdateTodo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`http://localhost:3000/api/addtodo/${params.id}`);
        response = await response.json();
        setUpdateTodo(response.result.todo);
      } catch (error) {
        alert("Something went wrong");
      }
    };
    fetchData();
  }, [params.id]); 

  const handleInputChange = (e) => {
    setUpdateTodo(e.target.value);
  };

  return (
    <div className={style.main_div}>
      <input
        type="text"
        placeholder='Enter your today task'
        className={style.inputbox}
        value={updateTodo}
        onChange={handleInputChange} 
      />
      <button>Update todo</button>
    </div>
  );
}
