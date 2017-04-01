import React from 'react';

export default function MyBox(props) {
    return (
        <div style={{ border: `2px solid ${props.boxColor}` }}>
            {props.children}
        </div>
    );
}

MyBox.propTypes = {
    boxColor : React.PropTypes.string.isRequired
}