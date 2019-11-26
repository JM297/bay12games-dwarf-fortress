import React, { Component } from 'react';
import Slides from "./Slides";

// AboutBanner component connects to the About component to make the full About page
export default class AboutBanner extends Component {
    // render() is basically anything that you want to have show up on your webpage
    // return() is what shows up when rendered
    render() {
        return (
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                    <br/><br/>
                        <h2 className="header center">About Dwarf Fortress</h2>
                        <div className="row">
                            <h5 className="center">
                                Prepare for the deepest, most intricate
                                simulation of a world that has ever been
                                created!
                            </h5>
                            <Slides/>
                            <p>
                                In this complex
                                construction/management/roguelike simulation,
                                every generated world brings a unique challenge,
                                whether it’s dwarves
                                with their own simulated personalities or
                                aquifers. Observe what makes your fortress fall
                                into eventual decline, and learn for next
                                time… until something else inevitably goes
                                wrong.
                            </p>
                            <p>
                                The combat model includes skills, body parts,
                                material properties, aimed attacks, wrestling,
                                pain, nausea, various poison effects, and much
                                more.
                            </p>
                            <p>
                                It’s difficult to convey the depth of the
                                generation. Hundreds of animals and monsters,
                                many of which are randomly created for each
                                world, as well
                                as generated poetry, musical forms, instruments,
                                and dances for your dwarves to practice and
                                perform. A dynamic weather model tracks wind,
                                humidity,
                                and air masses to create fronts, clouds, storms,
                                and blizzards. Over two hundred rock and mineral
                                types can appear, in their proper geological
                                environments.
                            </p><br/>
                                <p className="center">Remember: <strong>Losing is
                                    fun!</strong>
                                </p>
                        </div>
                </div>
            </div>
        );
    }
}
