import React from 'react';
import './home.css'

class Home extends React.Component {
  render() {
    return (
      <div id={"home"}>
        <div id="container">
          <div id="border">
            <div>
              <h1>
                Yahui Liang
              </h1>
              <button onClick={() => {
                this.props.learnMore();
              }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
