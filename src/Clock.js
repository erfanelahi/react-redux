import React from 'react';
import {Link, IndexLink} from 'react-router';

export function Clock(props) {
    return (
        <div>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export class RealClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold', color:'green'}}>Home</IndexLink> |
                <Link to='/clock' activeClassName='active' activeStyle={{fontWeight:'bold', color:'green'}}>Clock</Link> |
                <Link to='/realclock' activeClassName='active' activeStyle={{fontWeight:'bold', color:'green'}}>Real Clock</Link>
                <h2>Real Clock : {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

