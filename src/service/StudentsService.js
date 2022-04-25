import { useEffect } from "react"

const StudentsService = (setItems, setError) => {
    useEffect(() => {
        fetch('https://haywaster.github.io/json/GroupDb.json')
            .then(res => res.json())
            .then(res => setItems(res))
            .catch(error => {
                setError(error.message)
                throw error
            })
    }, [])
}

export default StudentsService