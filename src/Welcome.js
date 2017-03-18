import React from 'react';
import WelcomeES6 from './WelcomeES6';
import { WelcomeFunc, WelcomeFuncDefault } from './WelcomeFunc';
import "./WelcomeCSS.css";

export default function Welcome() {
    const myHTML1 = () => {
        return { __html: "<h4>dangerously Set InnerHTML > 0.5</h4>" };
    };
    const myHTML2 = () => {
        return { __html: "<p style='color:red;'>dangerously Set InnerHTML < 0.5</p>" };
    };
    return (
        <div>
            <WelcomeES6 name="Sara" />
            <WelcomeFunc name="Cahal" />
            <WelcomeFuncDefault />
            <div className="exHTML" dangerouslySetInnerHTML={Math.random() > 0.5 ? myHTML1() : myHTML2()} />
        </div>
    );
}