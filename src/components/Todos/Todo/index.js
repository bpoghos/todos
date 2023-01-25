import './styles.css'

export const Todo = ({ d, setTodosData, todosData }) => {

    const fetchDeletedTodos = async() => {
        const deleteTodo = todosData.filter((i) => i.id !== d.id)     
        setTodosData(deleteTodo)
        await fetch(`https://jsonplaceholder.typicode.com/todos/${d.id}`,{
            method: "DELETE" 
             })
    }

    

    return (
        <div className="todo" >
            <div className='deleteDiv'>
                <button className='deleteButton' onClick={() => fetchDeletedTodos()}>X</button>
            </div>
            <div className='pDiv'>
                <p className='pTitle'>{d.title}</p>
            </div>
            <div className='editDiv'>
                <button className='editButton'>EDIT</button>
            </div>
        </div>

    )
} 