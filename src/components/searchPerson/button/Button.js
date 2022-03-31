import './Button.scss'

const Button = ({switchNumber, setSwitchNumber}) => {
    return (
        <>
             <a onClick={() => {switchNumber === 'По списку' ? setSwitchNumber('По зачетке') : setSwitchNumber('По списку')}} className="btn btn-1">
                <svg>
                    <rect x="0" y="0" fill="none" width="100%" height="100%"/>
                </svg>
                {switchNumber}
            </a>
        </>
    )
}

export default Button