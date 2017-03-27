import React from 'react';

export default function MyLabel({ title, myValue }) {
    if (myValue.length > 0) {
        return null;
    }
    return (
        <p style={{ color: 'tan', marginBottom: '0px' }}> {title} </p>
    );
}