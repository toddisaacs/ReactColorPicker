import React from 'react';
import ReactDOM from 'react-dom';
import ColorPicker from './components/colorPicker/ColorPicker';

const onUpdate = (color) => {
    console.log('color updates', color);
};

const onSelect = (color) => {
    document.body.style.backgroundColor = `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;
};

ReactDOM.render(
    <ColorPicker onUpdate={onUpdate} onSelect={onSelect} />,
    document.getElementById('app')
);

