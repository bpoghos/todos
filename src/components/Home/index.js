import { Link } from 'react-router-dom'
import './styles.css'

export const Home = () => {
    return (
        <div className="home">
            <h1 className='h1'>HOME</h1>
            <Link to={'/todos'}>
         <button className='button'>TODOS</button>
         </Link>
        </div>
    )
}