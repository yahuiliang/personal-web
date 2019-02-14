import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        {/*This is the welcome message*/}
        <h1 style={{marginTop: 90, marginBottom: 90}}>
          Hello World!<br/>
          YAHUI is waiting for you
        </h1>
        {/*Here are cards for different categories*/}
        <div className="container">
          <div className="row">
            <div className="card col-sm mx-auto" style={{width: "15rem"}}>
              <img className="card-img-top" src={require("../../materials/DSC07303.png")} alt="Card cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a href={"#Go"} className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div className="card col-sm mx-auto" style={{width: "15rem"}}>
              <img className="card-img-top" src={require("../../materials/DSC07303.png")} alt="Card cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a href={"#Go"} className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

            <div className="card col-sm mx-auto" style={{width: "15rem"}}>
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
