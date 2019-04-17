import React, { Component } from 'react';

import ConfigIMG from '../Assets/configuracaogrande.png';
import ProfileIMG from '../Assets/profilegrande.png';
import LogoutIMG from '../Assets/logoutgrande.png';

import './header.css';

class Header extends Component {
  render() {
    return(
      <header className="container_header">
        <div className="container_header-content">
          <div className="container_header-items">
            <div className="header_items">
              <img src={ConfigIMG} className="header_items-img" alt="Configuration" />
              <a href="/" className="a_header">configuration</a>
            </div>
            <div className="header_items">
              <img src={ProfileIMG} className="header_items-img" alt="Profile" />
              <a href="/" className="a_header">profile</a>
            </div>
            <div className="header_items">
              <img src={LogoutIMG} className="header_items-img" alt="Logout" />
              <a href ="/login/" className="a_header">logout</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;