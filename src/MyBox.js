import React from 'react';
import WelcomeES6 from './WelcomeES6';
import { WelcomeFunc } from './WelcomeFunc';

export default function MyBox(props) {
    let refs_el = null;
    const components = {
        welcomeES6: WelcomeES6,
        welcomeFunc: WelcomeFunc
    };
    const WelcomeType = components[props.welcome];
    function handleClick() {
        console.log(refs_el);
    }
    return (
        <div style={{ border: `2px solid ${props.boxColor}` }} ref={el => refs_el = el}>
            {props.children}
            {props.myElement}
            <props.myComponent value={props.boxColor} />
            <WelcomeType name={props.boxColor} />
            <input type="button" value="Console Log" onClick={handleClick} />
        </div>
    );
}

MyBox.propTypes = {
    boxColor: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired,
    myElement: React.PropTypes.element,
    myComponent: React.PropTypes.func,
    welcome: React.PropTypes.string.isRequired
}

MyBox.defaultProps = {
    boxColor: "blue"
}