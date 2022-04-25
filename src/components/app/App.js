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
            <nav className="App-nav">
                <Routes>
                    <Route path='/' element={
                        <>
                            <Link className='App-nav-item' to="/name" element={<NamePage/>}>Ищешь кого-то?</Link>  
                            <Link className='App-nav-item' to="/number" element={<GroupPage/>}>Ищешь вариант?</Link>
                        </>
                        }
                    />
                    <Route path='/name' element={<NamePage/>}/>
                    <Route path='/number' element={<GroupPage/>}/>
                </Routes>
            </nav>
        </div> 
    ) 
}




export default App;
