'use client';
import style from '@/app/Components/Style/DisplayTodo.module.css';
import { useEffect, useState } from 'react';

async function fetchData() {
  try {
    let response = await fetch(`http://localhost:3000/api/addtodo`);
    response = await response.json();
    return response.result;
  } catch (error) {
    alert("Something went wrong");
    throw error;
  }
}

export default function Page() {
    const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const data = await fetchData();
        setTodos(data)
      } catch (error) {
        console.error(error);
      }
    };

    
    fetchDataFromAPI();
  }, []);

  return (
    <div>
      {
        todos.map((name)=>(
            name.completed === 'true' ?<>
                <div key={name._id} className={style.inner_div}>
                     <span>{name.todo}</span>
                     <span>Completed</span>
                </div>
            </> : null
           
        ))
      }
    </div>
  );
}
