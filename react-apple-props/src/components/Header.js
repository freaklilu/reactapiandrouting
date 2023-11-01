import React,{ Component } from 'react';
import appleLogo from "../commonResources/images/icons/logo-sm.png"
import searchLogo from "../commonResources/images/icons/search-icon-sm.png"
import cartLogo from "../commonResources/images/icons/cart-sm.png"
import Nav from './Nav';
import { Link } from 'react-router-dom';
class  Header extends Component {
  render(){

    let linksItem=[
      {linksName:"Mac",linksUrl:"/mac"},
      {linksName:"iphone",linksUrl:"/iphone"},
      {linksName:"ipad",linksUrl:"/ipad"},
      {linksName:"watch",linksUrl:"/watch"},
      {linksName:"tv",linksUrl:"/tv"},
      {linksName:"Music",linksUrl:"/music"},
      {linksName:"Support",linksUrl:"/support"}
    ];

    return (
      <div>
       <div className="nav-wrapper fixed-top">
    <div className="container">
      <nav className="navbar navbar-toggleable-sm navbar-expand-md">
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          ☰
        </button>
        <Link className="navbar-brand mx-auto" to="/"
          ><img src={appleLogo}
        /></Link>

        <div className="navbar-collapse collapse">
          <ul className="navbar-nav nav-justified w-100 nav-fill">
          
            {
              linksItem.map((s, i)=>{
return  <Nav key={i} linksName={s.linksName} reference= {s.linksUrl} />
              })
            }
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/search/"
                ><img src={searchLogo}
              /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="/cart/"
                ><img src={cartLogo}
              /></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
       </div> 
      </div>
  );
  }
   
}

export default Header;
