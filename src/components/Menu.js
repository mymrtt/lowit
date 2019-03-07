
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import LowItIMG from '../Assets/lowitlogo.png';
import logoLowItMobile from '../Assets/lowitpqn.png';
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
      return {
        showMenu: !prevState.showMenu
      }
    })
  };

  handleCloseMenu = () => {
    this.setState(prevState => {
      return {
        showMenu: false
      }
    })
    console.log(this.state.showMenu)
  }

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
      <div>
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
        <div className="navbar_mobile">
          <div className="navbar_mobile-imgs">
            <img src={LowItIMG} className="logoLowItMobile" alt="Logo Low-It Mobile" />
            <div style={{width: '35px', height: '65px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}} onClick={() => this.handleMenu()}>
              <img src={logoMenuHamburguer} className="logoMenuHamburguer" alt="Menu" />
            </div>
          </div>
          <div onClick={this.handleCloseMenu} className="navbar_mobile-links">
            {this.state.showMenu && this.renderLink() }
          </div>
        </div>
      </div>
    )
  }
};

export default Menu;