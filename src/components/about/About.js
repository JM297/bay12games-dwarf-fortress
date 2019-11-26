import React, { Component } from 'react';
import images from "../general/Images";
import AboutBanner from "./AboutBanner";

// About page
export default class About extends Component {
  // render() is basically anything that you want to have show up on your webpage
  // return() is what shows up when rendered
  render() {
    return (
        <div className="About">
          <AboutBanner/>
          <div className="container">
            <div className="section">
              <div className="row">
                <div className="col s12 m4">
                  <h5 className="center">
                    <img alt="features" src={images.features}/>
                  </h5>
                  <p className="light">
                    Not just generated geometry, but a whole simulated world
                    detailing the rise and fall of civilizations, unique
                    personalities,
                    creatures, cultures, and much more.
                  </p>
                  <ul className="features">
                    <li>Generate your unique world and manage a bustling colony of
                      dwarves, even as they probably mine towards their eventual
                      demise.
                    </li>
                    <li>Explore the generated world as a single hero in an
                      RPG-style mode.
                    </li>
                    <li>Legends Mode: Read the history of the generated world and
                      your games in it.
                    </li>
                    <li>A new endless hobby, just for you!</li>
                  </ul>
                </div>
                <div className="col s12 m4">
                  <h5 className="center">
                    <img alt="fortress mode" src={images.fortmode}/>
                  </h5>
                  <p className="light">
                    Command your dwarves as they search for wealth in their
                    generated mountain. Your dwarves will need a steady supply
                    of food and beer, but they’ll also need your guidance in
                    surviving attacks from hostile civilizations, the wilderness,
                    or even the dead.
                  </p>
                  <ul className="features">
                    <li>Craft treasures and furniture from a variety of
                      materials.
                    </li>
                    <li>Establish a barony and support the increasingly demanding
                      nobility.
                    </li>
                    <li>Read your dwarves’ thoughts to keep them happy.</li>
                    <li>Build floodgates to divert water for farming, and/or
                      prevent magma mishaps.
                    </li>
                    <li>Build structures and watch your dwarves discover and build
                      their culture, like taverns, libraries, temples, honey, wax,
                      pottery, animal training, bookbinding, and much more.
                    </li>
                  </ul>
                </div>
                <div className="col s12 m4">
                  <h5 className="center">
                    <img alt="adventurer mode" src={images.adventmode}/>
                  </h5>
                  <p className="light">
                    Choose a sapient race from your generated world (usually
                    dwarf, human, or elf, but potentially goblin or animal person)
                    and quest for glory.. Or seek vengeance.
                  </p>
                  <ul className="features">
                    <li>Recruit people to join you on your journey.</li>
                    <li>Explore without cumbersome plot restrictions, from
                      capitals to catacombs, labyrinths to bandit camps.
                    </li>
                    <li>The original nemesis system: Meet adversaries from the
                      previous games.
                    </li>
                    <li>Earn a reputation as a hero, soldier, thug, musician, etc,
                      with various civilizations.
                    </li>
                    <li>Stealth system with vision arcs, respecting vegetation
                      density and other factors.
                    </li>
                    <li>Steal a mummy’s treasure or learn forbidden secrets from a
                      necromancer’s tower.
                    </li>
                    <li>Visit your retired fortresses and meet your old
                      dwarves &ndash; even ask them to join you!
                    </li>
                  </ul>
                </div>
              </div>
            </div><br/><br/>
          </div>
        </div>
    );
  }
}
