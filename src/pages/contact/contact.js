import React from 'react';
import './contact.css'

class Contact extends React.Component {
  render() {
    return (
      <div className={"contact"}>
        <img src={require("../../materials/IMG_0203.JPG")} alt={"unable to display"}/>
        <div>
          Yahui Liang<br/>
          414-628-8074<br/>
          liangy@msoe.edu
        </div>
      </div>
    )
  }
}

export default Contact;
