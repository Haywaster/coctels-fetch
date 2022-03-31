import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Title.css'

const Title = () => {
    const [sameNameSurname, setSameNameSurname] = useState([]);
    const [error, setError] = useState(false);
    const [person, setPerson] = useState(null);

    function restart() {
        setPerson(null)
        setSameNameSurname([])
        setError(false)
    }

    return (
        <Link to='/'>
            <h1 onClick={() => restart()} className="Title">Data Group</h1>
        </Link>
    )
}

export default Title