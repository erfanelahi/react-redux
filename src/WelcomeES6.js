import React from 'react';

export default class WelcomeES6 extends React.Component {
    render() {
        return <h5>Hello, {this.props.name}</h5>;
    }
}