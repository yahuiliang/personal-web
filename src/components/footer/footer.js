import React from 'react';
import './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        {/* <footer> */}
        <div id="copyright">
          &copy; Yahui Liang Website 2019
        </div>
        <div id="external-links">
          <a href="https://github.com/yahuiliang">Github</a>
          <a href="https://www.linkedin.com/in/yahui-liang/">LinkedIn</a>
        </div>
        {/* </footer> */}
      </footer>
    )
  }
}

export default Footer;
