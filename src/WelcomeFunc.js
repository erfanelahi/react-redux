import React from 'react';

export function WelcomeFunc(props) {
  return <h5>Welcome, {props.name} --WelcomeFunc</h5>;
}

export function WelcomeFuncDefault() {
  return <h5>Welcome There... --WelcomeFunc</h5>;
}