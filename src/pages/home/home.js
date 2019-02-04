import React from 'react';
import './home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        {/*This is the welcome message*/}
        <h1 id={"home-title"}>Welcome to Yahui's<br/>personal website</h1>
        {/*Here are cards for different categories*/}
        <div className="container">
          <div className="row">
            <div className="card col-sm" style={{width: "10rem"}}>
              <img className="card-img-top" src={require("../../materials/DSC07303.png")} alt="Card cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a href={"#Go"} className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div className="card col-sm" style={{width: "10rem"}}>
              <img className="card-img-top" src={require("../../materials/DSC07303.png")} alt="Card cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a href={"#Go"} className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div className="card col-sm" style={{width: "10rem"}}>
              <img className="card-img-top" src={require("../../materials/DSC07303.png")} alt="Card cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a href={"#Go"} className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
