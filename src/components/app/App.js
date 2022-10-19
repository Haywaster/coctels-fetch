import './App.css';
import {Route, Link, Routes} from "react-router-dom";
import NamePage from '../pages/NamePage/NamePage';
import GroupPage from '../pages/GroupPage/GroupPage';
import Title from '../title/Title';

const App = () => {
    return (  
        <div className='App'>
            <header>
                <Title/>
            </header>        
            <Routes>
                <Route path='/' element={
                    <nav className="App-nav">
                        <Link className='App-nav-item' to="/name" element={<NamePage/>}>Ищешь кого-то?</Link>  
                        <Link className='App-nav-item' to="/number" element={<GroupPage/>}>Ищешь вариант?</Link>
                    </nav>
                    }
                />
            </Routes>
            <main>
                <Routes>
                    <Route path='/name' element={<NamePage/>}/>
                    <Route path='/number' element={<GroupPage/>}/>
                </Routes>
            </main>
            <footer className='App-footer'>
                <h3 style={{'margin': '0', 'color': 'white'}}>developed by <a style={{'color': 'red'}} target="_blank" rel="noopener noreferrer" href="https://vk.com/haywaster02">him</a></h3>
            </footer>
        </div> 
    ) 
}

export default App;