import React from 'react'
import './loader.scss'
const MyLoader = (props) => {
    return (
        <div>
        {props.toggle &&
            <div id='outer'>
                <div id='middle'>
                    <div id='inner'>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

export default MyLoader
