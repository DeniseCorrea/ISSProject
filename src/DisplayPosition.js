import React from 'react';

const DisplayPosition = ({ lat, lng }) => {
    return (
        <div>
            <p>Latidude:{lat}</p>
            <p>Longitude:{lng}</p>
        </div>
    )
}

export default DisplayPosition;