import React, { Component } from 'react';

import ConfigpqnIMG from '../Assets/configuracaopqn.png';
import ProfilepqnIMG from '../Assets/profilepqn.png';
import LogoutpqnIMG from '../Assets/logoutpqn.png';

class Header extends Component {
  render() {
    return(
      <header className="container_header">
        <div className="container_header-elementos">
          <div className="container_header-itens">
            <div>
              <img src={ConfigpqnIMG} className="" alt="configuração" />
              <a href="" className="a_header">configuração</a>
            </div>
            <div>
              <img src={ProfilepqnIMG} className="" alt="profile" />
              <a href="" className="a_header">profile</a>
            </div>
            <div>
              <img src={LogoutpqnIMG} className="" alt="logout" />
              <a href ="" className="a_header">logout</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;