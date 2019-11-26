import React, { Component } from 'react';
import ContactBanner from "./ContactBanner";
import images from '../general/Images'
import ContactForm from "./ContactForm";

export default class Contact extends Component {
    render() {
        return(
            <div className = "Contact">
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m12">
                                <ContactBanner/>
                                <p className="center">
                                    We are dedicated to making Dwarf Fortress 100% stable. If you experience technical
                                    problems, have suggestions,
                                    or just want to ask a question about the game, feel free to fill out this form and
                                    let us know; development is
                                    very active. You can also contact Toady One directly at <a
                                    href="mailto:toadyone@bay12games.com">toadyone@bay12games.com</a>.
                                </p>
                                <ContactForm/>
                                <div id="mailing" class="col s6 m6">
                                    <p class="center">
                                        If you've enjoyed any of our games, and if you are able to give, we accept financial support. You can contribute electronically
                                        either on <a href="http://bay12games.com/support.html">our support page</a> or to our Patreon (link down below).<br/><br/>
                                        You can also send mail of any kind, including but not limited to checks and money orders, to:
                                    </p>
                                    <p class="center">
                                        Tarn Adams<br/>
                                        PO Box 2990<br/>
                                        Silverdale, WA 98383-2990<br/><br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p class="center">
                            Please make checks payable to Tarn Adams. Please remember to sign and write your address on money orders; the bank won't take it otherwise. All support goes toward site fees, computer equipment and my personal expenses.
                        </p><br/>
                        <div className="row center">
                            <h5>Follow Us on Social Media<br/><br/>
                                <a className="white-text" href="https://www.facebook.com/bay12games/" target="_blank">
                                    <img id="facebook" src={images.facebook} alt="Facebook"/>
                                </a>
                                <a className="white-text" href="https://twitter.com/bay12games" target="_blank">
                                    <img id="twitter" src={images.twitter} alt="Twitter"/>
                                </a>
                                <a className="white-text" href="https://www.patreon.com/bay12games" target="_blank">
                                    <img id="patreon" src={images.patreon} alt="Patreon"/>
                                </a>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
