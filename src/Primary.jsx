import './Primary.css'
import { useState } from 'react'

function Primary() {
    const [count, setCount] = useState(0)
    
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

        <div className='secretButton'>
            <button onClick={() => setCount((count) => count + 1)}>
                click to count: {count}
            </button>
        </div>
    </>
    )
}

export default Primary