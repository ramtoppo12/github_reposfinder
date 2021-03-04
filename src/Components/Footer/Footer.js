import React from 'react'
import "./Footer.css";
import video from "../../Assets/Videos/Logo.mp4"
import { useDataLayerValue } from '../../DataLayer/DataLayer';
function Footer() {
    const[{input},dispatch] = useDataLayerValue();
    return (
        <>
             <footer style={!input ? {marginTop:0 + "px"}:{marginTop:200 + "px"}}>
        <div className="gitubFinder">
            <video src= { video } type="video/mp4" loop autoPlay width="100px" height="100px">
                
            </video>
        </div>
        <h1>GitHub Repo Finder</h1>
        <div className="social__icons">
            <i className="fab fa-github"></i>
        </div>
        <div className="social__icons">
            <i className="fab fa-instagram"></i>
        </div>
        <div className="social__icons">
            <i className="fab fa-youtube"></i>
        </div>
        <p>Made By:Webcode with Ram</p>

    </footer>
        </>
    )
}
export default Footer
