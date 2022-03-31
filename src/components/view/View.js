import anonim from '../../pictures/pngwing.com.png'
import './View.css'

const View = ({person, setPerson, personArr, error, sameNameSurname, showData, setShowData, header}) => {
    function setPage(image) {
        let photo = image
        if (image === '') {
            photo = anonim
        }
        return photo
    }

    function showMeRequiredPerson(e) {
        const person = personArr.find(item => item.surname === e.target.innerText)
        setPerson(person)
    }

    function showVK() {
        let name = person.name;
        if(showData) {
            return name += ' в VK' 
        } else {
            return name
        }
    }

    return (
        <>            
            {error ? <h2 className='View-p'>Ошибка((</h2> : null}
            {sameNameSurname.length === 0 && !person ? <h2 className='View-howName'>{header}</h2> : null}
            {"1" in sameNameSurname && !person ? <h2>Оу, да их тут {sameNameSurname.length}</h2> : null}
            {person && !error ? 
            <div>
                {showData ?  
                <div className='View-info'>
                    <h2 className='View-h2'>{person.name + " " + person.surname}</h2>
                    <p className='View-p'>Группа: {person.group}</p>
                    <p className='View-p'>Номер по списку: {person.numberOnTheList}</p>
                    <p className='View-p'>Номер по зачетке: {person.numberOnTheRecordBook}</p>
                </div>
                :
                <img onClick={() => setShowData(true)} className='View-img' src={setPage(person.page)} alt='student'/>}
                <a className="View-link" target="_blank" rel="noopener noreferrer" href={person.url}>{showVK()}</a>
            </div> : null}
            {person || sameNameSurname.length === 0 ? null : 
            <ol className='View-ol'>
                {sameNameSurname.map(item => (
                    <li className='View-li' key={item} onClick={showMeRequiredPerson}>{item}</li>
                ))}
            </ol>
            }
        </>     
    )
}

export default View