import {useState} from 'react'
import View from '../../view/View'
import SearchPerson from '../../searchPerson/SearchPerson';
import StudentsService from '../../../service/StudentsService';
import './GroupPage.css'

const GroupPage = () => {
    const [header] = useState('Какой нужен вариант?');
    const [placeholder] = useState('Введите номер')
    const [inputType] = useState('number')
    const [switchNumber, setSwitchNumber] = useState('По списку')
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
                setSwitchNumber={setSwitchNumber}
                switchNumber={switchNumber}
                inputType={inputType}
                placeholder={placeholder}
                person={person}
                setPerson={setPerson}
                enterValue={enterValue}
                setEnteredValue={setEnteredValue}
                sameNameSurname={sameNameSurname} 
                setSameNameSurname={setSameNameSurname}
                showData={showData}
                setShowData={setShowData}
                setError={setError}
                items={items}
                setPersonArr={setPersonArr}/>
        </div>
    )
}

export default GroupPage