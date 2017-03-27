import React from 'react';
import HelloWorld from './HelloWorld';
import UserDetails from './UserDetails';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { id: 1, name: 'Mir', email: 'm@m.com', address: '123 Abc' },
                { id: 2, name: 'Erfan', email: 'e@e.com', address: '345 Ijk' },
                { id: 3, name: 'Elahi', address: '789 Xyz' }
            ],
            myValue: "Hi"
        };
        this.clearAll = this.clearAll.bind(this);
        //this.onValueChange = this.onValueChange.bind(this);
        this.onFromSubmit = this.onFromSubmit.bind(this);
    }
    clearAll(event) {
        this.setState({ users: [] });
    }
    bindUserDetails(user) {
        return <UserDetails key={user.id} user={user} />;
    }
    onValueChange(e) {
        this.setState({ myValue: e.target.value });
    }
    onFromSubmit(e) {
        e.preventDefault();
        alert(this.refs.myValue.value);
        this.props.onNewGreetMessage(this.refs.myValue.value);
        this.refs.myValue.value = "";
    }
    render() {
        return (
            <fieldset>
                <legend>{this.props.title}</legend>
                <button onClick={this.clearAll}>Clear All</button>
                <table><tbody>{this.state.users.map(this.bindUserDetails)}</tbody></table>
                <form onSubmit={this.onFromSubmit}>
                    <input type="text" onChange={(e) => this.onValueChange(e)} ref="myValue" />
                    <button>Submit</button>
                </form>
                <label>{this.state.myValue}</label>
            </fieldset>
        );
    }
}

User.propTypes = {
    title: React.PropTypes.string.isRequired,
    onNewGreetMessage: React.PropTypes.func.isRequired
};