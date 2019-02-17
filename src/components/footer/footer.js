import React from 'react';
import './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <footer class="container">
          <p class="float-right"><a href="#Top">Back to top</a></p>
          <a href="https://github.com/yahuiliang">Github</a>
          <a href="https://www.linkedin.com/in/yahui-liang/">LinkedIn</a>
          <p>&copy; Yahui Liang Website 2019</p>
        </footer>
      </div>
    )
  }
}

export default Footer;
