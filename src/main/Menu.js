import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import ButtonsMenu from '../components/ButtonsMenu';

import LowItIMG from '../Assets/lowitlogo.png';
import logoLowItMobile from '../Assets/lowitpqn.png';
import logoMenuHamburguer from '../Assets/menuhamburguer.png';

const links = [
  { route: "/leitura", label: "Leitura", className:"nav_link-label1"},
  { route: "/dashboard", label: "Dashboard", className:"nav_link-label2"},
  { route: "/dados", label: "Dados", className:"nav_link-label1"},
];

export class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  // ChangeBtnColor = () => {
  //   switch(this.param.color){
  //     case 'DarkBlue':
  //       return '#00717F';
  //     default:
  //       return '#93DEE8';
  //   }
  // }

  renderLink = () => {
    return links.map( link =>
      <Link key={link.route} className="nav_link" to={link.route}>
        <span
          className={link.label === "Dados"
            ? "nav_link-label2"
            : "nav_link-label1"}>
          {link.label}  
        </span>
      </Link>
    )
  }

  render() {
    return (
      <nav className="navbar">
        <div className="container_navbar-links">
          <div className="container_navbar-img">
            <img src={LowItIMG} className="logolowitIMG" alt="Logo Low-It" />
            <div className="container_imgs-menu">
              <img src={logoLowItMobile} className="logoLowItMobile" alt="Logo Low-It Mobile" />
              {/* <div className="menu_mobile">
                <button className="btn_menuMobile"><img src={logoMenuHamburguer} className="logoMenuHamburguer" alt="Menu" /></button>
              </div> */}
            </div>
          </div>
          <ul className="navbar_links-lista">
            { this.renderLink() }
          </ul>
        </div>
      </nav>
    )
  }
};

export default Menu;