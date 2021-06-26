import './Loader.css'
import React from 'react'

const Loader = () => {
    return (
		<div style ={{textAlign: 'center'}}>
            <div className="lds-ellipsis">
                <div></div><div></div><div></div><div></div>
            </div>
        </div>
	)
}

export default Loader
