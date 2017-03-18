import React from 'react';

export function WelcomeFunc(props) {
  return <h5>Hello, {props.name}</h5>;
}

export function WelcomeFuncDefault() {
  return <h5>Hello There...</h5>;
}