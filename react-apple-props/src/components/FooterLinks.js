import React, { Component } from "react";

class FooterLinks extends Component {
  render() {
    let elements = this.props.footerLinks;
    return (
      <ul>
        {elements.map((value) => {
          return (
            <li>
              <a href="#">{value}</a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default FooterLinks;
