import React from 'react';
import "./header.css";
import img from "../../Assets/Images/Logo 500x500 px.jpeg"

function Header() {
    return (
        <>
             
    <header>
        <nav>
            <div className="logo">
                <img className="GitFinder__logo" src={img} alt="deer" />
                <img className="leaf1" src="https://assets.codepen.io/2621168/leaf1.png" alt="leaf" />
                <img className="leaf2" src="https://assets.codepen.io/2621168/leaf2.png" alt="leaf" />
                <img className="leaf3" src="https://assets.codepen.io/2621168/leaf3.png" alt="leaf" />
            </div>
            <ul className="nav__items">
                <li>GitHub</li>
                <li>Repos</li>
                <li>Finder</li>
            </ul>
            <svg viewBox="0 0 1 1">
                <defs>
                    <clipPath clipPathUnits="objectBoundingBox" id="gitFindermask">
                        <path
                            d="M303.49,371.1l-.2-.511a.145.145,0,0,0-.188-.082l-.511.2a.145.145,0,0,0-.082.188l.2.511a.145.145,0,0,0,.188.082l.511-.2A.145.145,0,0,0,303.49,371.1Zm-.547.166a.079.079,0,0,1-.1-.045l-.109-.281a.079.079,0,0,1,.045-.1l.281-.109a.079.079,0,0,1,.1.045l.109.281a.079.079,0,0,1-.045.1Z"
                            transform="translate(-302.5 -370.5)" fill="#333" />
                    </clipPath>
                </defs>
            </svg>
        </nav>
    </header>
        </>
    )
}

export default Header
