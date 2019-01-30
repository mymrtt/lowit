import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ButtonsMenu from '../components/ButtonsMenu';

import LowItIMG from '../Assets/lowitpqn.png';
import DashpqnIMG from '../Assets/dashpqn.png';
import Dashpqn2IMG from '../Assets/dashpqn2.png';
import DashpqnHoverIMG from '../Assets/dashpqnhover.png';

const links = [
  { route: "/leitura", image:`${DashpqnIMG}`, imageOver:`${DashpqnHoverIMG}`, label: "Leitura"},
  { route: "/dashboard", image:`${DashpqnIMG}`, label: "Dashboard"},
  { route: "/dados", image:`${Dashpqn2IMG}`, label: "Dados"},
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
      <Link key={link.route} className="nav-link" to={link.route}>
        {/* {onmouseover
          ? <img src={link.imageOver} className="nav-img" alt="Ícone Menu" />
          : <img src={link.image} className="nav-img" alt="Ícone Menu" />
        } */}
        <img src={link.image} className="nav-img" alt="Ícone Menu" />
        <span>
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