import React from 'react';

const ColorBox = ( {size=30, red, green, blue, alpha, onSelect }) => {

    let ColorBoxDisplayBoxStyle = {
        backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})`,
        width: '100%',
        height: '100%'
    };

    let ColorBoxContainerStyle = {
        height: size,
        width:  size,
        border: '2px solid black',
        cursor: 'pointer',
        backgroundColor: '#FFFFFF',
        opacity: 1
    };

    return (
        <div style={ColorBoxContainerStyle} >
            <div style={ColorBoxDisplayBoxStyle} onClick={onSelect}/>
        </div>
    )
};

export default ColorBox