import {useState} from 'react'
import data from '../../../database/GroupDb.json'
import View from '../../view/View'
import SearchPerson from '../../searchPerson/SearchPerson';
import './GroupPage.css'

const GroupPage = () => {
    const [header, setHeader] = useState('Какой нужен вариант?');
    const [placeholder, setPlaceholder] = useState('Введите номер')
    const [inputType, setInputType] = useState('number')
    const [switchNumber, setSwitchNumber] = useState('По списку')
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
                setSwitchNumber={setSwitchNumber}
                switchNumber={switchNumber}
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

export default GroupPage