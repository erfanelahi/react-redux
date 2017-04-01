import React from 'react';
import WelcomeES6 from './WelcomeES6';
import { WelcomeFunc } from './WelcomeFunc';

export default function MyBox(props) {
    const components = {
        welcomeES6 : WelcomeES6,
        welcomeFunc : WelcomeFunc
    };
    const WelcomeType = components[props.welcome];
    return (
        <div style={{ border: `2px solid ${props.boxColor}` }}>
            {props.children}
            {props.myElement}
            <props.myComponent value={props.boxColor} />
            <WelcomeType name={props.boxColor} />
        </div>
    );
}

MyBox.propTypes = {
    boxColor : React.PropTypes.string.isRequired,
    myElement : React.PropTypes.element,
    myComponent : React.PropTypes.func,
    welcome : React.PropTypes.string.isRequired
}