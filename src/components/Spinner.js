import React from 'react'
import loading from './loading.gif'

const Spinner = () => {

    return (
        // <div className="text-center" >
        //     <img className="my-3" src={loading} alt="loading" />
        // </div>
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'darkred' }}>
            <img src={loading} alt="loading" />
        </div>
    )
}

export default Spinner