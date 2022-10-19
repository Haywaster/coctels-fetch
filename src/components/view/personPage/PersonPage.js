import anonim from '../../../pictures/pngwing.com.png'

const PersonPage = ({showData, setShowData, person, error}) => {

    function showVK() {
        let name = person.name;
        if(showData) {
            return name += ' в VK' 
        } else {
            return name
        }
    }

    function setPage(image) {
        let photo = image
        if (image === '') {
            photo = anonim
        }
        return photo
    }

    return (
        <>
            {person && !error ? 
                <div>
                    {showData ?  
                    <div className='View-info'>
                        <h2 className='View-h2'>{person.name + " " + person.surname}</h2>
                        <div className='View-p-par'>
                            <p>Группа: {person.group}</p>
                            <p>Номер по списку: {person.numberOnTheList}</p>
                            <p>Номер по зачетке: {person.numberOnTheRecordBook}</p>
                        </div> 
                    </div>
                    :
                    <img onClick={() => setShowData(true)} className='View-img' src={setPage(person.page)} alt='student'/>}
                    <a className="View-link" target="_blank" rel="noopener noreferrer" href={person.url}>{showVK()}</a>
            </div> : null}
        </>
    )
}

export default PersonPage