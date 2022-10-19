import PersonPage from '../view/personPage/PersonPage'
import ErrorMessage from './errorMessage/ErrorMessage'
import './View.css'

const View = ({person, setPerson, personArr, error, sameNameSurname, showData, setShowData, header}) => {
    function showMeRequiredPerson(e) {
        const person = personArr.find(item => item.surname === e.target.innerText)
        setPerson(person)
    }

    const listItem = sameNameSurname.map(item => (
        <a className='View-li' href="#" key={item} onClick={showMeRequiredPerson}><li>{item}</li></a>
    ))

    const rows = listItem.reduce((prev, el, i) => {
        const subIdx = Math.floor(i / 3);
        prev[subIdx] = [...(prev[subIdx] || []), el];
        return prev;
        }, []
    );

    return (
        <>
            <PersonPage person={person} error={error} showData={showData} setShowData={setShowData}/>        
            <ErrorMessage error={error}/>
            {sameNameSurname.length === 0 && !person ? <h2 className='View-howName'>{header}</h2> : null}
            {"1" in sameNameSurname && !person ? <h2 className='View-howName'> Оу, да их тут {sameNameSurname.length}</h2> : null}
            {person || sameNameSurname.length === 0 ? null : 
            <div className='View-ol'>
                {
                    rows.map((row) => {
                        return ( 
                            <div className='View-row'>
                                {row}
                            </div> 
                        )
                    })
                }
            </div>
            }
        </>
    )
}

export default View