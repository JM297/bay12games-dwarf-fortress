import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import images from '../general/Images';

export default class Footer extends Component {
    // render() is basically anything that you want to have show up on your webpage
    // return() is what shows up when rendered
    render() {
        return (
            <footer className="page-footer brown darken-4">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m12 l12">
                            <Link to={"/About"} className="white-text" href="#">About</Link>
                            <Link className="white-text" to={"/log/2019"}>Development Log</Link>
                            <a className="white-text" href="http://www.bay12forums.com/smf/" target="_blank">Forums</a>
                            <Link className="white-text" to={"/contact"}>Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        <img style={{width:'35%'}} alt="bay12logo" src={images.logo}/>
                            <p>© Bay 12 Games 2019 - All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        );
    }
}
