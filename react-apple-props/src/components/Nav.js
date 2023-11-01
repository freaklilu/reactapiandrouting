import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <li className="nav-item">
              <Link className="nav-link js-scroll-trigger" to={this.props.reference}>{this.props.linksName}</Link>
            </li>
        );
    }
}

export default Nav;


