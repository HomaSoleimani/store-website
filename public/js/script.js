const humburgerIcon = document.getElementById("humburger-icon");
const body = document.getElementsByTagName("body")[0];
const subMenu = document.getElementById("sub-menu");
const chevronDown = document.getElementById("chevron-down");
humburgerIcon.onclick = () => handleNavClass();
chevronDown.onclick = () => handleSubMenu();

// start script for top nav
const handleNavClass = () => {
  const containerMenu = document.getElementById("container-menu");
  const resNav = document.getElementById("res-nav");
  subMenu.classList.replace("open-sub-menu", "hidden-sub-menu");
  if (resNav.className === "respons-nav") {
    containerMenu.classList.replace("close-side", "open-side");
    resNav.classList.replace("respons-nav", "side-nav");
    humburgerIcon.className = "fa fa-close";
  } else {
    containerMenu.classList.replace("open-side", "close-side");
    resNav.classList.replace("side-nav", "respons-nav");
    humburgerIcon.className = "fa fa-align-right";
  }
};
// finish script for top nav

// start script for sub menu
const handleSubMenu = () => {
  if (subMenu.className === "hidden-sub-menu") {
    subMenu.classList.replace("hidden-sub-menu", "open-sub-menu");
  } else {
    subMenu.classList.replace("open-sub-menu", "hidden-sub-menu");
  }
};
// finish script for sub menu

// start script for card
// const cardBtn = document.getElementsByClassName("card-btn");
// const pressCardBtn = (child) => {
//   if (child.getElementsByTagName("i")[0].className === "fa fa-cart-plus") {
//     child.style.background = "#f9a7a3";
//     child.getElementsByTagName("i")[0].className = "fa fa-check";
//   } else {
//     child.style.background = "#42b4a7";
//     child.getElementsByTagName("i")[0].className = "fa fa-cart-plus";
//   }
// };
// for (let child of cardBtn) {
//   child.onclick = pressCardBtn(child);
// }

// finish script for card
