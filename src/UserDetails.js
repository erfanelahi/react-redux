import React from 'react';

const UserDetails = ({ user }) => {
    const showInfoAlert = (event) => {
        alert(`id : ${user.id} | name : ${user.name} | email : ${user.email} | address : ${user.address}`);
    };
    return (
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
            <td><a href="javascript:void(0)" onClick={showInfoAlert}>Show Details</a></td>
        </tr>
    );
};

UserDetails.propTypes = {
    user: React.PropTypes.object.isRequired
};

export default UserDetails;