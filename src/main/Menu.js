import React, {Component} from 'react';
import {Link} from 'react-router-dom';


const links = [
  { route: "/leitura", label: "Leitura"},
  { route: "/dashboard", label: "Dashboard"},
  { route: "/dados", label: "Dados"},
];

export class Menu extends Component {
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
            <img src="../../assets/lowlogo.png" className="logolowit" alt="Logo Low-It" />
            <ul className="navbar-links">
              { this.renderLink() }
            </ul>
          </div>
        </aside>
      </nav>
    )
  }
};

export default Menu;