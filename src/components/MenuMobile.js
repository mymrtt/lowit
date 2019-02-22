// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

// import LowItIMG from '../Assets/lowitlogo.png';
// import logoLowItMobile from '../Assets/lowitpqn.png';
// import logoMenuHamburguer from '../Assets/menuhamburguer.png';

// const links = [
//   { route: "/leitura", label: "Leitura", className:"nav_link-label1" },
//   { route: "/dashboard", label: "Dashboard", className:"nav_link-label2" },
//   { route: "/dados", label: "Dados", className:"nav_link-label1" },
// ];

// export class Menu extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       showMenu: false
//     };
//   }

//   openMenu(evt) {
//     evt.preventDefault();
//     this.setState({showMenu: true});
//   }
  
//   closeMenu() {
//     this.setState({showMenu: false});
//   }

//   renderLink = () => {
//     if(this.state.showMenu){
//       return links.map( link =>
//         <Link key={link.route} close={this.closeMenu.bind(this)} className="nav_link" to={link.route}>
//           <span
//             className={link.label === "Dados"
//               ? "nav_link-label2"
//               : "nav_link-label1"}>
//             {link.label}  
//           </span>
//         </Link>
//       )
//     }
//     else{
//       return null;
//     }
//   }

//   render() {
//     return (
//       <nav className="navbar">
//         <div className="container_navbar-links">
//           <div className="container_navbar-img">
//             <img src={LowItIMG} className="logolowitIMG" alt="Logo Low-It" />
//             <div className="container_imgs-menu">
//               <img src={logoLowItMobile} className="logoLowItMobile" alt="Logo Low-It Mobile" />
//               <a href="#" className="btn_menuMobile" onClick={this.openMenu.bind(this)}><img src={logoMenuHamburguer} className="logoMenuHamburguer" alt="Menu" /></a>
//             </div>
//           </div>
//           <ul className="navbar_links-lista">
//             { this.renderLink() }
//           </ul>
//         </div>
//       </nav>
//     )
//   }
// };

// export default Menu;





// var menuItem = document.querySelectorAll('.menu-item');
//   var menuList = document.querySelector('.menu-list');
//   var socialIcon = document.querySelector('.header-social');
  
//   document.getElementById("menu-icon-mobile").addEventListener("click", myFunction);
//   document.getElementById("menu-item").addEventListener("click", myFunction2);
//   document.getElementById("menu-item2").addEventListener("click", myFunction2);
//   document.getElementById("menu-item3").addEventListener("click", myFunction2);
//   document.getElementById("menu-item4").addEventListener("click", myFunction2);
//   document.getElementById("menu-item5").addEventListener("click", myFunction2);
//   // document.getElementById("menu-item6").addEventListener("click", myFunction2);
//   // document.getElementById("menu-item7").addEventListener("click", myFunction2);


 
//   function myFunction() {
//     menuList.classList.toggle('--drop-menu')
//     socialIcon.classList.toggle('--drop-social')
//     menuItem.forEach((element) => {
//       element.classList.add('--drop-item')
//     });
//   }

//   function myFunction2() {
//     menuList.classList.remove('--drop-menu')
//     socialIcon.classList.toggle('--drop-social')
//   };


// /*  Menu  */
// .header-container {
//   width: 100%;
//   height: 100%;
//   position: relative;
// }

// @media (max-width: 768px) {
//   .header-container {
//     width: 100%;
//     height: 100%;
//   }
// }

// .wrapper-header {
//   height: 100vh;
//   background-color: #F2F2F2;
//   margin: 0;
//   position: fixed;
//   width: 6vw;
//   font-family: SkyhookMonoRegular;
// }
//   @media (max-width: 768px) {
//   .wrapper-header {
//     width: 100%;
//     height: 8vh;
//     position: relative;
//     display: flex;
//     align-items: center;
//     position: relative;
//     opacity: 0;
//     transition: all 0.25s ease-in;
//   }
// }

// .fade-in {
//   opacity: 1;
// }


// .header-logoBox {
//   height: 20vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// } 
// @media (max-width: 768px) {
//   .header-logoBox{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100vw;
//   }
// }

// .header-logo {
//   width: 60%; 
// }
// @media (max-width: 768px){
//   .header-logo {
//     display: none;
//   }
// }


// .header-logo-hover{
//   display: none;
// }  
// @media (max-width: 768px) {
//   .header-logo-hover{
//     display: block;
//     width: 55vw;
//   }
// }

// .menu {
//   height: 47vw;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   flex-direction: column;
// }
//   @media (max-width: 768px){
//     .menu {
//       width: 20vw;
//       height: 8vh;
//       display: flex;
//       flex-direction: column;
//       align-items: flex-end;
//   }
// }

// .menu-icon-mobile {
//     display: none;
// }

// @media (max-width: 768px) {
//   .menu-icon-mobile {
//     display: block;
//     width: 26px;
//     margin: 20px 30px;
//   }
// }

// .menu-list {
//   width: 80vh;
//   display: flex;
//   flex-direction: row-reverse;
//   list-style: none;
//   transform: rotate(-90deg);
//   color: #000;
// }

// @media (max-width: 768px) {
//   .menu-list {
//     display: none;
//   }

//   .menu-list.--drop-menu {
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     align-items: flex-start;
//     background-color: rgba(0, 0, 0, 1);
//     position: fixed;
//     top: 60vh;
//     height: 40vh;
//     width: 100vw;
//     transform: rotate(0deg);
//     z-index: 99;
//   }
// }

// .menu-list a {
//   text-decoration: none;
//   position: relative;
//   color: #000;
// }

// .menu-list a:hover {
//   color: #000;
// }

// .menu-list a:before {
//   content: "";
//   margin-left: 25px;
//   position: absolute;
//   width: 70%;
//   height: 1px;
//   bottom: -2px;
//   left: 20px;
//   font-size: 1rem;
//   background-color: #000;
//   visibility: hidden;
//   -webkit-transform: scaleX(0);
//   transform: scaleX(0);
//   -webkit-transition: all 0.3s ease-in-out 0s;
//   transition: all 0.3s ease-in-out 0s;
// }

// .menu-list a:hover:before {
//   visibility: visible;
//   -webkit-transform: scaleX(1);
//   transform: scaleX(1);
// }

// .menu-item {
//   margin-left: 50px;
//   font-size: 1rem;
//   color: #000;
//   font-family: SkyhookMonoRegular;
//   position: relative;
//   text-decoration: none;
// }



// @media (max-width: 768px) {
//   .menu-item {
//     display: none;
//     margin-right: 25px; 
//   }

//   .menu-item.--drop-item {
//     display: block;
//     font-family: SkyhookMonoBold;
//     font-size: 1.5rem;
//     color: rgb(256,256,256);
//   }
// }

// .menu-lang {
//   width: 15vw;
//   display: none;
//   flex-direction: row-reverse;
//   list-style: none;
//   transform: rotate(-90deg);
//   color: #000;
// }

// @media (max-width: 768px) {
//   .menu-lang .--drop-menu {
//     display: none;
//     flex-direction: column;
//     justify-content: space-around;
//     align-items: flex-start;
//     background-color: rgba(0, 0, 0, 1);
//     position: fixed;
//     top: 55vh;
//     height: 45vh;
//     width: 100vw;
//     transform: rotate(0deg);
//     z-index: 99;
//   }
// }

// .header-social {
//   display: none;
// }

// @media ( max-width: 768px) {
//   .header-social {
//     right: 25px;
//     display: none;
//     flex-direction: column;
//     height: 170px;
//     justify-content: space-between;
//     position: fixed;
//     right: 20px;
//     top: 63vh;
//   }

//   .header-social.--drop-social {
//     display: flex;
//     height: 25vh;
//     z-index: 99; 
//   }
// }

// .social-icon {
//   width: 45px;
// }

// @media (max-width: 500px) {
//   .social-icon {
//     width: 25px;
//   }
// }