import { useState } from 'react'
import './styles.css'

export const Header = ({setTodosData,todosData }) => {


    const [title, setTitle] = useState('')

    const todoBody = {
        userId: 1,
        id: Math.random(),
        title: title,
        completed: false
    }

    const fetchAddedTodos = async () => {
      const fetchAddTodo =  await fetch(`https://jsonplaceholder.typicode.com/todos`, {
            method: "POST",
            body: todoBody
        })
        const fetchedAddTodo = await fetchAddTodo.json()
        setTodosData([...todosData, todoBody])
        


            }




    return (
        <div className="header">
            <input className='input' onChange={(e) => setTitle(e.target.value)} value={title}/>
            <button className='addTodo' onClick={() => fetchAddedTodos()}>ADD TODO</button>

        </div>
    )
}