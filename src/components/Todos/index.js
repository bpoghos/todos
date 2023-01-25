import { useEffect, useState } from 'react'
import { Header } from '../Header'
import './styles.css'
import { Todo } from './Todo'


export const Todos = () => {

    const [todosData, setTodosData] = useState([])
console.log(todosData);
    const fetchTodos = async () => {
        const fetchData = await fetch('https://jsonplaceholder.typicode.com/todos')
        const fetchedData = await fetchData.json()
        setTodosData(fetchedData.splice(0, 10))
    }

    useEffect(() => {
        fetchTodos()
    }, [])


    const todos = todosData.length ? todosData.map((d) => <Todo key={d.id} d={d} todosData={todosData} setTodosData={setTodosData} />) : 'no todos'

    return (
        <div className='todosDiv'>
            <Header setTodosData={setTodosData} fetchTodos={fetchTodos} todosData={todosData}/>
            <div className='todos'>{todos}</div>
            <div className='buttonDiv'>
                <button className='button'>MORE</button>
            </div>
        </div>
    )
}