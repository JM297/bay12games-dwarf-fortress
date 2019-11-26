import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';

// Swipe is the sidenav component that connects to Nav

// Stylizes the sidenav
const useStyles = makeStyles({
    list: {
        width: 300,
        height: 'inherit',
        paddingLeft: 15,
        background: '#6d4c41'
    },
});

// Function that renders the sidenav
export default function SwipeableTemporaryDrawer() {
    const classes = useStyles(); // Styling declaration

    // Sets the sidenav off as default
    const [state, setState] = React.useState({
        left: false,
    });

    // Switches the sidenav on and off
    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    // How the sidenav will look when rendered
    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                    <ListItem className="white-text" button component={Link} to={"/"}>
                        Home
                    </ListItem>
                <ListItem className="white-text" button component={Link} to={"/about"}>
                    About
                </ListItem>
                <ListItem className="white-text" button component={Link} to={"/log/2019"}>
                    Development Log
                </ListItem>
                <ListItem className="white-text" button component="a" href="http://www.bay12forums.com/smf/index.php" target="_blank">
                    Forums
                </ListItem>
                <ListItem className="white-text" button component={Link} to={"/contact"}>
                    Contact
                </ListItem>
            </List>
        </div>
    );
    return (
        <div>
            <a href="#" className="sidenav-trigger" data-target="nav-mobile" onClick={toggleDrawer('left', true)}><i className="material-icons">menu</i></a>
            <SwipeableDrawer open={state.left} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', true)}>
                {sideList('left')}
            </SwipeableDrawer>
        </div>
    );
}