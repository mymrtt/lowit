import React, { Component } from 'react';


class Header extends Component {
  render() {
    return(
      <header className="container_header">
        <img src="../assets/lowlogo.png" className="logolowit" alt="Logo Low-It" />
        <div className="container_header-itens">
          <div>
            {/* <img src="" className="" alt="configuração" /> */}
            <p>configuração</p>
          </div>
          <div>
            {/* <img src="" className="" alt="profile" /> */}
            <p>profile</p>
          </div>
          <div>
            {/* <img src="" className="" alt="logout" /> */}
            <p>logout</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;