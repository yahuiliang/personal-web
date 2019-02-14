import React from 'react';
import './about.css';

class About extends React.Component {
  constructor() {
    super();
    this.state = {textValue: ""};
  }

  render() {
    return (
      <div className={"tmp"}>
        <img src={require("../../materials/DSC07303.png")} alt="nothing" className="img-thumbnail"/>
        <p>
          I am in my third year of studies towards a bachelor's in Software Engineering and Computer Engineering. I love
          programming. C++ is my favorite language since it is the first computer language that I heard from others. I
          am confident at my programming skills. Since "unmaintainable code=useless characters" in my opinion, I never
          write code which is unable to be read and maintained. Software is changing how people lives now, and I believe
          that I am the one who will change the world.
        </p>
        <div>

        </div>
      </div>
    )
  }
}

export default About;
