import React from 'react';
import './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div id="container">
          <div id="copyright">
            &copy; Yahui Liang Website 2019
          </div>
          <div id="external-links">
            <a href="https://www.linkedin.com/in/yahui-liang/" class="fa fa-linkedin fa-lg"></a>
            <a href="https://github.com/yahuiliang" class="fa fa-github fa-lg"></a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
