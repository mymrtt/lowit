import React, { Component } from 'react';

import ConfigpqnIMG from '../Assets/configuracaogrande.png';
import ProfilepqnIMG from '../Assets/profilegrande.png';
import LogoutpqnIMG from '../Assets/logoutpqn.png';

import './header.css';

class Header extends Component {
  render() {
    return(
      <header className="container_header">
        <div className="container_header-content">
          <div className="container_header-items">
            <div className="header_items">
              <img src={ConfigpqnIMG} className="header_items-img" alt="Configuração" />
              <a href="/" className="a_header">configuração</a>
            </div>
            <div className="header_items">
              <img src={ProfilepqnIMG} className="header_items-img" alt="Profile" />
              <a href="/" className="a_header">profile</a>
            </div>
            <div className="header_items">
              <img src={LogoutpqnIMG} className="header_items-img" alt="Logout" />
              <a href ="/" className="a_header">logout</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;