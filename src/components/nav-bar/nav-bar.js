import React from 'react';

class MenuBar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand mb-0 h1"
             href={"#Home"}
             onClick={() => {
               this.props.itemSelected("home")
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
              <li className="nav-item">
                <a className="nav-link"
                   href={"#Home"}
                   data-toggle="collapse"
                   data-target=".navbar-collapse.show"
                   onClick={() => {
                  this.props.itemSelected("home")
                }}>
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"
                   href={"#About"}
                   data-toggle="collapse"
                   data-target=".navbar-collapse.show"
                   onClick={() => {
                     this.props.itemSelected("about")
                   }}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link"
                   href={"#Projects"}
                   data-toggle="collapse"
                   data-target=".navbar-collapse.show"
                   onClick={() => {
                     this.props.itemSelected("contact")
                   }}>
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default MenuBar;
