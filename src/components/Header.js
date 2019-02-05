import React, { Component } from 'react';

import ConfigpqnIMG from '../Assets/configuracaopqn.png';
import ProfilepqnIMG from '../Assets/profilepqn.png';
import LogoutpqnIMG from '../Assets/logoutpqn.png';

class Header extends Component {
  render() {
    return(
      <header className="container_header">
        <div className="container_header-conteudo">
          <div className="container_header-itens">
            <div className="header_itens">
              <img src={ConfigpqnIMG} className="header_itens-img" alt="configuração" />
              <a href="" className="a_header">configuração</a>
            </div>
            <div className="header_itens">
              <img src={ProfilepqnIMG} className="header_itens-img" alt="profile" />
              <a href="" className="a_header">profile</a>
            </div>
            <div className="header_itens">
              <img src={LogoutpqnIMG} className="header_itens-img" alt="logout" />
              <a href ="" className="a_header">logout</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;