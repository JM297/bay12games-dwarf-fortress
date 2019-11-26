import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Log from './Log';
import Post from './Post';

export default class Log_Page extends Component {
    render() {
        return(
            <div className="Log_Page">
                <Switch>
                    <Route path="/log/:year/:id" component={Post}/>
                    <Route path="/log/:id" component={Log}/>
                </Switch>
                <div className="row logs">
                    <div className="col s12 m12 l12">
                        <p className="center">
                            <Link to={`/log/2019`} >2019 Log</Link>
                            <Link to={`/log/2018`} >2018 Log</Link>
                            <Link to={`/log/2017`} >2017 Log</Link>
                            <Link to={`/log/2016`} >2016 Log</Link>
                            <Link to={`/log/2015`} >2015 Log</Link>
                            <Link to={`/log/2014`} >2014 Log</Link>
                            <Link to={`/log/2013`} >2013 Log</Link>
                            <Link to={`/log/2012`} >2012 Log</Link> <br/>
                        </p>
                    </div>
                    <div className="col s12 m12 l12">
                        <p className="center">
                            <Link to={`/log/2011`} >2011 Log</Link>
                            <Link to={`/log/2010`} >2010 Log</Link>
                            <Link to={`/log/2009`} >2009 Log</Link>
                            <Link to={`/log/2008`} >2008 Log</Link>
                            <Link to={`/log/2007`} >2007 Log</Link>
                            <Link to={`/log/2006`} >2006 Log</Link>
                            <Link to={`/log/2005`} >2005 Log</Link>
                            <Link to={`/log/2004`} >2004 Log</Link> <br/>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}