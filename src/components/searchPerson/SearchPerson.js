import './SearchPerson.css'
import ArrowBack from './arrowBack/ArrowBack'
import Button from './button/Button';

const SearchPerson = ({items, enterValue, setEnteredValue, sameNameSurname, setSameNameSurname, person, setPerson, setPersonArr, setError, setShowData, placeholder, inputType, switchNumber, setSwitchNumber}) => {    
    
    function search(e) {
        e.preventDefault();
        setEnteredValue('')

        if (window.location.pathname === '/name') {
            searchPerson(e)
        } else if (window.location.pathname === '/number') {
            searchNumber(e)
        }
    }
    
    function addName (event) {
        event.preventDefault();
        setEnteredValue(event.target.value);
    }

    function searchNumber() {
        const personArr = items.students.filter(item => {
            if (switchNumber === 'По списку') {
                if(item.numberOnTheList === enterValue) {
                    setError(false)
                    return item
                }
            } else if (switchNumber === 'По зачетке') {
                let number = item.numberOnTheRecordBook.slice(5)
                if (number.startsWith(0)) {
                    number = number.slice(1)
                }
                if(number === enterValue) {
                    setError(false)
                    return item
                }
            }
        })
        setCustom(personArr)
    }

    function searchPerson() {
        const personArr = items.students.filter(item => {
            let obj;

            if (item.name.toLowerCase() === enterValue.toLowerCase()) {
                setError(false)
                return item
            } else if (typeof item.altname === 'string') {
                if (item.altname.toLowerCase() === enterValue.toLowerCase()) {
                    setError(false)
                    return item
                }
            } else if (typeof item.altname === 'object') {
                item.altname.forEach(name => {
                    if (name.toLowerCase() === enterValue.toLowerCase()) {
                        setError(false)
                        obj = item
                    }
                })
                return obj
            }
        })
        setCustom(personArr)
    }

    function setCustom(personArr) {
        setPersonArr(personArr)
        setShowData(false)

        if(personArr.length === 0) {
            setError(true)
        }

        const sameNameSurname = personArr.map(item => item.surname)

        if(sameNameSurname.length === 1) {
            setSameNameSurname([])
            setPerson(personArr[0])
        } else {
            setSameNameSurname(sameNameSurname)
            setPerson(null)
        }
    }

    function restart() {
        if (person) {
            setPerson(null)
            setShowData(false)
        } else if (!person) {
            setSameNameSurname([])
        }
    }
    
    return (
        <>
        <form id="signin" autoComplete="off">
            <div id="wrapper">
                {person || "1" in sameNameSurname ? <ArrowBack restart={restart}/> : null}
                <input type={inputType} id="user" name="user" onChange={addName} value={enterValue} placeholder={placeholder}></input>
                <button type="submit" onClick={search}>&#xf0da;</button>
            </div>
        </form>
        {window.location.pathname === '/number' ? <Button setSwitchNumber={setSwitchNumber} switchNumber={switchNumber}/> : null}
        </>
    )
}

export default SearchPerson