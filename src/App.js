import React from 'react';
import HelloWorld from './HelloWorld';
import User from './User';
import Welcome from './Welcome';
import {Link, IndexLink} from 'react-router';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { greetValue: Math.random().toString() };
        this.handleNewGreetMessage = this.handleNewGreetMessage.bind(this);
    }
    handleNewGreetMessage(value) {
        this.setState({ greetValue: value });
    }
    render() {
        return (
            <div>
                <User title="User Information" onNewGreetMessage={this.handleNewGreetMessage} />
                <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold', color:'green'}}>My Home</IndexLink> |
                <Link to='/clock' activeClassName='active' activeStyle={{fontWeight:'bold', color:'green'}}>Clock</Link> |
                <Link to='/realclock' activeClassName='active' activeStyle={{fontWeight:'bold', color:'green'}}>Real Clock</Link>
                <HelloWorld value={this.state.greetValue} />
                <Welcome />
                {this.props.children}
            </div>
        );
    }
}