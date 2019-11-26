import React, { Component } from 'react';
import HomeBanner from "./HomeBanner";

// Home Page
export default class Home extends Component {
    // render() is basically anything that you want to have show up on your webpage
    // return() is what shows up when rendered
    render() {
        return (
            <div className="Home">
                <HomeBanner/>
                <div className="container">
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m4">
                                <h5 className="center">Latest Log Post 1</h5>
                                <p className="light">
                                    Alright, I did the last two things I wanted to do in this network rewrite: having plots that
                                    last longer (using the existing civ-based
                                    spies as a model), and allowing plots to pass even further down the criminal organization
                                    networks (so that more evidence will be created
                                    while making the leaves of the org chart more active.) <a href="logs/log_2019.html">...Click
                                    here to continue reading</a>
                                </p>
                            </div>
                            <div className="col s12 m4">
                                <h5 className="center">Latest Log Post 2</h5>
                                <p className="light">
                                    This week I mostly pushed forward the ideas from last time. Plots can propagate out into
                                    dedicated criminal organizations
                                    from the non-criminal position holders (often through intermediaries), and criminal
                                    organizations can also expand out into
                                    other cities <a href="logs/log_2019.html">...Click here to continue reading</a>
                                </p>
                            </div>
                            <div className="col s12 m4">
                                <h5 className="center">Latest Log Post 3</h5>
                                <p className="light">
                                    I am mostly recovered from the traveling and am back to work. As mentioned in the log before
                                    the travels, it turned out that we needed more work to link up
                                    networks and to make sure every link was generating some evidence. As stated there, we
                                    decided to focus on criminal organizations, and the linkages are much
                                    better now! <a href="logs/log_2019.html">...Click here to continue reading</a>
                                </p>
                            </div>
                        </div>
                    </div><br/><br/>
                </div>
            </div>
        );
    }
}
