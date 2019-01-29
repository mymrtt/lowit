import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ButtonsMenu from '../components/ButtonsMenu';

const links = [
  { route: "/leitura", label: "Leitura"},
  { route: "/dashboard", label: "Dashboard"},
  { route: "/dados", label: "Dados"},
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
        {link.label}
      </Link>
    )
  }

  render() {
    return (
      <nav className="navbar">
        <aside>
          <div className="container_navbar-links">
            <div className="container_navbar-img">
              <img src="../../Assets/lowitpqn.png" className="logolowit" alt="Logo Low-It" />
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