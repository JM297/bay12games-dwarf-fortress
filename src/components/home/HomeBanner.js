import React, { Component } from 'react';

// HomeBanner connects to Home to complete the Home Page
export default class HomeBanner extends Component {
    // render() is basically anything that you want to have show up on your webpage
    // return() is what shows up when rendered
    render() {
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container"><br/><br/>
                        <h2 className="header center orange-text">
                            Coming soon to <a href="https://store.steampowered.com/app/975370" target="_blank">Steam</a> and <a href="https://kitfoxgames.itch.io/dwarf-fortress" target="_blank">itch.io</a>!
                        </h2>
                        <div className="row center">
                            <h5>
                                Download<br/>Dwarf Fortress Classic 0.44.12 (July 7, 2018)<br/><br/>
                                <a href="http://bay12games.com/dwarves/df_44_12_win.zip">Windows</a> | <a href="http://bay12games.com/dwarves/df_44_12_linux.tar.bz2">Linux</a> | <a href="http://bay12games.com/dwarves/df_44_12_osx.tar.bz2">Mac</a>
                            </h5>
                            <h6>
                                <a href="http://bay12games.com/dwarves/older_versions.html" target="_blank">Older
                                    Versions</a>
                            </h6>
                        </div>
                </div>
            </div>
        );
    }
}
