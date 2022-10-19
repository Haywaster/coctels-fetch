const ErrorMessage = (props) => {
    return (
        <>
            {props.error ? 
            <div className='View-p'>
                <h2 className='View-err-title'>Ошибка!</h2>
                <span> Введите данные еще раз</span>
            </div>  
             : null}
        </>
    )
}

export default ErrorMessage