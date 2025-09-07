import './Primary.css'
import { useNavigate } from 'react-router-dom';

function Primary() {
    const navigate = useNavigate();

    
    return(
    <>
        <div className='banner'>
            <h1>
                All About Joe Schwartz
            </h1>
        </div>
        
        <h1 className='joeSchwartz'>Joe Schwartz</h1>
        <div>
        
        </div>
        <h1>Accolades</h1>
        <div className='accolades'>

        </div>

        <div className='primaryButton'>
        <button className="secretButton" onClick={() => navigate('mydad')}>
            click here
        </button>
        </div>
    </>
    )
}

export default Primary