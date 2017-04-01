/* eslint-disable */
import React, {PropTypes} from 'react';

const HelloWorld = ({value = "World"}) => {
    let myStyle = { fontStyle: 'italic' };
    const setStyle = (value) => { 
        return <span style={Object.assign({}, myStyle, {color: 'limegreen'})}>{value}</span>;
    };
    return (
        <h4>Hello {setStyle(value)}!</h4>
    );
}

HelloWorld.propTypes = {
    value : PropTypes.string
};

export default HelloWorld;