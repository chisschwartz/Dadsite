import './Primary.css'
import { useNavigate } from 'react-router-dom';
import arrow from './assets/rightarrow.png'

function Primary() {
    const navigate = useNavigate();

    
    return(
    <>
        <div className='banner'>
            <h1>
                Joe Schwartz Rocks!!!
            </h1>
            <p>
                Hey dad this is just a rough idea of the template, I want to work with you on creating exactly what you want.
            </p>
            <p> This would be an image banner of some sort</p>
        </div>
        
        <h1 className='joeSchwartz'>Joe Schwartz</h1>
        <div>

        <p>Here would be a few blurbs about you and what you want to highlight</p>
        
        </div>

        <h1>Accolades</h1>
        <div className='accolades'>
        <p>Here we would list your jobs talents and everything you are good at</p>
        <p>We can add on to this depending on what is important to you</p>
        </div>

        <div className='primaryButton'>
        <button className="secretButton" onClick={() => navigate('mydad')}>
            click here for suprise
        </button>
        </div>
    </>
    )
}

export default Primary