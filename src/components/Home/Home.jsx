import React from "react";

export const Home = () => (
    <div className="home">
        <img className="home__background" src="./assets/img.jpg" alt="background"/>
        <div className="home__greeting-wrapper">
            <p>Hello, I am glad to see you here</p>
            <p>I hope you appreciate my work</p>
            <p>My CV - <a target="_blank"  rel="noopener noreferrer" href="https://aleksandrovfe.github.io/cv/#/">Link</a></p>
        </div>
        <p className="home__extend-info">
            For this task I used React, React-router, classnames <br/>
        </p>
    </div>
)