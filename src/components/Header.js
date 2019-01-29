import React, { Component } from 'react';


class Header extends Component {
  render() {
    return(
      <header className="container_header">
        {/* <img src="../assets/lowlogo.png" className="logolowit" alt="Logo Low-It" /> */}
        <div className="container_header-elementos">
          <div className="container_header-itens">
            <div>
              <img src="../../Assets/configuracaopqn.png" className="" alt="configuração" />
              <a href="" className="a_header">configuração</a>
            </div>
            <div>
              <img src="../../Assets/profilepqn.png" className="" alt="profile" />
              <a href="" className="a_header">profile</a>
            </div>
            <div>
              <img src="../../Assets/logoutpqn.png" className="" alt="logout" />
              <a href ="" className="a_header">logout</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;