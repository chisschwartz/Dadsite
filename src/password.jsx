import './password.css';
import { useNavigate } from 'react-router-dom';

function Password() {
    const navigate = useNavigate();

    return (
        <div className='passwordContainer'>
        <button className="enterButton" onClick={() => navigate('joeschwartz')}>
            click here
        </button>
        </div>
    )
}

export default Password