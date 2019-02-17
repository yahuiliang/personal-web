import React from 'react';
import './home.css'

class Home extends React.Component {
  render() {
    return (
      <div id={"home"}>
        {/*This is the welcome message*/}
        {/* <h1 style={{marginTop: 90, marginBottom: 90}}>
          Hello World!<br/>
          YAHUI is waiting for you!
        </h1>
        <img src={require("../../materials/feelsgoodman.png")} alt={"Unknown Src"}/>
        <div>
          <button className="btn btn-primary" type="submit" onClick={() => {
            this.props.start();
          }}>
            Start the trip
          </button>
        </div> */}
      </div>
    );
  }
}

export default Home;
