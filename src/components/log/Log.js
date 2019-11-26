import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Log_Data from './Log_Data';

export default class Log extends Component{
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentPage: 1,
      itemsPerPage: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render(){
    const { currentPage, itemsPerPage } = this.state;

    let log={
      year:"",
      id:"",
      logs: [
          {
            logid: "",
            id: "",
            date: "",
            stuff: <p> </p>
          }
          ]
    };
    for(let i=0; i < Log_Data.length; i++){
      if(this.props.match.params.id==Log_Data[i].id){
        log=Log_Data[i];
        i=Log_Data.length;
      }
    }
    console.log(log);

    // Logic for displaying current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = log.logs.slice(indexOfFirstItem, indexOfLastItem);

    const renderItems = currentItems.map(item => {
      return <div className="list-item" key={item.logid} id={item.logid}>
        <div className="col s12 m12">
          <Link to={`${log.year}/${item.logid}`} >
            <h4>{item.date}</h4>
          </Link>
          {item.stuff}
        </div>
      </div>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(log.logs.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
            <li key={number} >
              <a className="simple-pagination" id={number} onClick={this.handleClick} >{number}</a>
            </li>
      );
    });

    return (
        <div className="Log">
          <div className="section no-pad-bot" id="index-banner">
            <div className="container">
              <br/><br/>
              <h2 className="header center">Developer's Log {log.year}</h2>
              <div className="row center">
                <h5 className="header col s12 light">
                  Current Development: <a href="http://bay12games.com/dwarves/dev_now.rss">RSS Feed</a>, <a href="http://bay12games.com/dwarves/dev_release.rss">Release Feed</a>
                </h5>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="section">
              <div className="list-wrapper">
                  {renderItems}
                <ul className="pagination">
                  {renderPageNumbers}
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
  }
}