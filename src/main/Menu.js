import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ButtonsMenu from '../components/ButtonsMenu';

import LowItIMG from '../Assets/lowitpqn.png';
// import DashpqnIMG from '../Assets/dashpqn.png';
// import Dashpqn2IMG from '../Assets/dashpqn2.png';
// import DashpqnHoverIMG from '../Assets/dashpqnhover.png';

const links = [
  { route: "/leitura", label: "Leitura", className:"nav_link-label1"},
  { route: "/dashboard", label: "Dashboard", className:"nav_link-label1"},
  { route: "/dados", label: "Dados", className:"nav_link-label2"},
];

export class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  ChangeBtnColor = () => {
    switch(this.param.color){
      case 'DarkBlue':
        return '#00717F';
      default:
        return '#93DEE8';
    }
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
        <aside>
          <div className="container_navbar-links">
            <div className="container_navbar-img">
              <img src={LowItIMG} className="logolowitIMG" alt="Logo Low-It" />
            </div>
            <ul className="navbar_links-lista">
              { this.renderLink() }
            </ul>
          </div>
        </aside>
        <ButtonsMenu value="Dia"/>
        <ButtonsMenu value="Mês" backgroundColor='DarkBlue'/>
        <ButtonsMenu value="Ano"/>
      </nav>
    )
  }
};

export default Menu;