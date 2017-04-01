import React from 'react';

export default function MyBox(props) {
    return (
        <div style={{ border: `2px solid ${props.boxColor}` }}>
            {props.children}
            {props.myElement}
            <props.myComponent value={props.boxColor} />
        </div>
    );
}

MyBox.propTypes = {
    boxColor : React.PropTypes.string.isRequired,
    myElement : React.PropTypes.object,
    myComponent : React.PropTypes.func
}