import React from 'react';
import "./nav-bar.css";

class NavBar extends React.Component {
  render() {
    let homeActive = "Home" === this.props.active ? " active" : "";
    let aboutActive = "About" === this.props.active ? " active" : "";
    let projectsActive = "Projects" === this.props.active ? " active" : "";
    let contactActive = "Contact" === this.props.active ? " active" : "";
    return (
      <div id="nav-bar" href="Top">
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand mb-0 h1"
             href={"#Home"}
             onClick={() => {
               this.props.itemSelected("Home")
             }}>
            Yahui.com
          </a>
          <button className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarText"
                  aria-controls="navbarText"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className={"nav-item" + homeActive}>
                <a className="nav-link"
                   href={"#Home"}
                   data-toggle="collapse"
                   data-target=".navbar-collapse.show"
                   onClick={() => {
                     this.props.itemSelected("Home")
                   }}>
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className={"nav-item" + aboutActive}>
                <a className="nav-link"
                   href={"#About"}
                   data-toggle="collapse"
                   data-target=".navbar-collapse.show"
                   onClick={() => {
                     this.props.itemSelected("About")
                   }}>
                  About
                </a>
              </li>
              <li className={"nav-item" + projectsActive}>
                <a className="nav-link"
                   href={"#Projects"}
                   data-toggle="collapse"
                   data-target=".navbar-collapse.show"
                   onClick={() => {
                     this.props.itemSelected("Projects")
                   }}>
                  Projects
                </a>
              </li>
              <li className={"nav-item" + contactActive}>
                <a className="nav-link"
                   href={"#Contact"}
                   data-toggle="collapse"
                   data-target=".navbar-collapse.show"
                   onClick={() => {
                     this.props.itemSelected("Contact")
                   }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
