
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import LowItIMG from '../Assets/lowitlogo.png';
import logoLowItMobile from '../Assets/lowitpqn.png';
import logoMenuHamburguer from '../Assets/menuhamburguer.png';

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
      <nav className="navbar">
        <div className="container_navbar-links">
          <div className="container_navbar-img">
            <img src={LowItIMG} className="logolowitIMG" alt="Logo Low-It" />
            <div className="container_imgs-menu" onClick={() => this.handleMenu()}>
              <img src={logoLowItMobile} className="logoLowItMobile" alt="Logo Low-It Mobile" />
              <img src={logoMenuHamburguer} className="logoMenuHamburguer" alt="Menu" />
            </div>
          </div>
          <ul onClick={this.handleCloseMenu} className="navbar_links-lista">
            {this.state.showMenu && this.renderLink() }
            <div className="renderLink-menu">
              {this.renderLink()}
            </div>
          </ul>
        </div>
      </nav>
    )
  }
};

export default Menu;