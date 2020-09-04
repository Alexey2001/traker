import {useState} from 'react'

const HabbitButton = ({date}) => {
    const [complete, setComplete] = useState(false)
    return (
        <span>
        {date.getDate()}/{date.getMonth() + 1}
        <button onClick={() => setComplete(!complete)}>
            {complete ? 'X' : '0'}
        </button>
        </span>
    )
}

export default HabbitButton;