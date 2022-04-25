import {useState} from 'react'
import View from '../../view/View'
import SearchPerson from '../../searchPerson/SearchPerson';
import StudentsService from '../../../service/StudentsService';
import './NamePage.css'

const NamePage = () => {
    const [header] = useState('Как его зовут?');
    const [placeholder] = useState('Введите имя')
    const [inputType] = useState('text')
    const [enterValue, setEnteredValue] = useState('')
    const [sameNameSurname, setSameNameSurname] = useState([]);
    const [error, setError] = useState(false);
    const [personArr, setPersonArr] = useState([]);
    const [person, setPerson] = useState(null);
    const [showData, setShowData] = useState(false);
    const [items, setItems] = useState([]);

    StudentsService(setItems, setError);

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