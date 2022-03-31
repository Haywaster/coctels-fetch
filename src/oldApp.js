import {useState, useEffect} from 'react'
import './App.css';

const App = (props) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [page, setPage] = useState('https://vk.com/haywaster02')
    const [color, setColor] = useState('blue')
    const [own, setOwn] = useState('my')

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true)
                setItems(result.drinks)
            } 
        )
        .catch(
            (error) => {
                setIsLoaded(true)
                setError(error.message)
                throw error
            }
        )
    }, [])

    const changePage = () => {
        // if (page === 'https://vk.com/korts') {
        //     setPage('https://vk.com/haywaster02')
        // } else {
        //     setPage('https://vk.com/korts')
        // }

        switch(page === 'https://vk.com/korts' || page === 'https://vk.com/haywaster02' || page ==='https://vk.com/miloshevich9') {
            case (page === 'https://vk.com/haywaster02'):
            setPage('https://vk.com/korts');
            setColor('red');
            setOwn('her');
            break;
            case (page === 'https://vk.com/korts'):
            setPage('https://vk.com/miloshevich9');
            setColor('green');
            setOwn('his');
            break;
            case (page === 'https://vk.com/miloshevich9'):
            setPage('https://vk.com/haywaster02');
            setColor('blue');
            setOwn('my');
            break;
            default: 
            setPage('https://vk.com/haywaster02');
            setColor('blue');
            setOwn('my')
        }

        // page === 'https://vk.com/haywaster02' ? setPage('https://vk.com/korts') : setPage('https://vk.com/haywaster02');
    }
 
    return (
        <div className="App">
            <header className="App-header">
                {error ?
                <div>
                    <p style={{'color': 'red'}}>{error}</p>
                    <p>Dont cry man. Our spec do everything possible</p>
                </div> 
                : null}
                {!isLoaded ? <p>Loading...</p> : null}
                <ul style={{'padding': '0px'}}>
                {isLoaded && !error ?
                <>
                    <h1 style={{'marginBottom' : '0px'}}>Coctails menu</h1>
                    <div style={{'display': 'flex', 'justifyContent': 'center', 'marginBottom' : '10px'}}>
                        <button onClick={() => window.open(page)} style={{'display': 'block', 'marginTop': '10px', 'padding': '10px', 'outline': 'none'}}>Look {own} VK page</button>
                        <button onClick={changePage} style={{'color': color, 'display': 'block', 'marginTop': '10px', 'padding': '10px', 'outline': 'none'}}>Change on</button>
                    </div>
                </> : null}   
                    {items.map((item) =>
                        <div key={item.idDrink} style={{'display':'flex', 'justifyContent': 'space-between','marginBottom': '15px'}}>
                            <li style={{'display': 'block', 'paddingTop':'37.5px', 'paddingRight': '15px', 'listStyleType': 'none'}}>
                                {item.strDrink}
                            </li>
                            <img style={{'display': 'block'}} width='100' height='100' alt='coctail' src={item.strDrinkThumb}/>
                        </div>
                    )}
                </ul>
            </header>
        </div>
    ) 
}

export default App;
