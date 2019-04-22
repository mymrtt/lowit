
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import LowItIMG from '../Assets/lowitlogo.png';
import LowItMobile from '../Assets/lowitmobile.png';
import logoMenuHamburguer from '../Assets/menuhamburguer.png';

import './menu.css';

const links = [
  { route: "/leitura", label: "Leitura", className:"nav_link-label1" },
  { route: "/dashboard", label: "Dashboard", className:"nav_link-label2" },
  { route: "/dados", label: "Dados", className:"nav_link-label1" },
];

export class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false
    };
  }
  
  handleMenu = () => {
    this.setState(prevState => {
      return{
        showMenu: !prevState.showMenu
      }
    })
  };

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
      <div className="Menu">
        <nav className="navbar">
          <div className="container_navbar-links">
            <div className="container_navbar-items">
              <img src={LowItIMG} className="logolowitIMG" alt="Logo Low-It" />
            </div>
            <div className="navbar_links-list">
              <ul className="renderLink-menu">
                {this.renderLink()}
              </ul>
            </div>
          </div>
        </nav>

        {/* NAV MOBILE */}
        <div className="navbar_mobile">
          <div className="navbar_mobile-imgs">
            <img src={LowItMobile} className="logoLowItMobile" alt="Logo Low-It" />
            {/* MANIPULACAO DA HEADER */}
            <div className="container_manipulationHeader">
              <img src={this.props.src} alt="Icon Header" />
              <p>{this.props.text}</p>
            </div>
            {/* MANIPULACAO DA HEADER */}
            <div className="navbar_mobile-menuHamburguer" onClick={() => this.handleMenu()}>
              <img src={logoMenuHamburguer} className="logoMenuHamburguer" alt="Menu" />
            </div>
          </div>
          {this.state.showMenu &&
            <div className="navbar_mobile-links">
              {this.renderLink()}
            </div>
          }
        </div>
      </div>
    )
  }
};

export default Menu;