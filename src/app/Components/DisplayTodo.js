import React, { useEffect, useState } from 'react'

export default function DisplayTodo() {

    const [showTodo, setShowTodo] = useState("")

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
    <>
      {
        showTodo.map((data)=>(
            <div key={data._id}>
                <span>{data.todo}</span>
            </div>
        ))
      }
    </>
  )
}
