import {useState} from 'react'
import data from '../../../database/GroupDb.json'
import View from '../../view/View'
import SearchPerson from '../../searchPerson/SearchPerson';
import './NamePage.css'
import { Route } from 'react-router-dom';

const NamePage = () => {
    const [header, setHeader] = useState('Как его зовут?');
    const [placeholder, setPlaceholder] = useState('Введите имя')
    const [inputType, setInputType] = useState('text')
    const [enterValue, setEnteredValue] = useState('')
    const [sameNameSurname, setSameNameSurname] = useState([]);
    const [items] = useState(data);
    const [error, setError] = useState(false);
    const [personArr, setPersonArr] = useState([]);
    const [person, setPerson] = useState(null);
    const [showData, setShowData] = useState(false);

    return (
        <div className='NamePage-wrap'>
            <View 
                header={header}
                error={error} 
                sameNameSurname={sameNameSurname} 
                personArr={personArr}
                person={person}
                setPerson={setPerson}
                showData={showData}
                setShowData={setShowData}
                />
            <SearchPerson 
                inputType={inputType}
                placeholder={placeholder}
                items={items}
                person={person}
                setPerson={setPerson}
                enterValue={enterValue}
                setEnteredValue={setEnteredValue}
                sameNameSurname={sameNameSurname} 
                setSameNameSurname={setSameNameSurname}
                showData={showData}
                setShowData={setShowData}
                setError={setError}
                setPersonArr={setPersonArr}/>
        </div>
    )
}

export default NamePage