import {
  mostrarNav,
  ocultarNav,
  resetNav,
  selector,
  toggleHidden,
} from "@/libs/menu";

// Elementos
const hamburger = selector(".hamburger");
const hamburgerIcon = selector(".hamburger-icon");
const closeIcon = selector(".close-icon");
const nav = selector("nav");

// Eventos
hamburger?.addEventListener("click", () => {
  const haveShowNav = nav?.classList.contains("show-nav");

  toggleHidden(hamburgerIcon);
  toggleHidden(closeIcon);

  if (haveShowNav) ocultarNav(nav);
  else mostrarNav(nav);
});

window.onhashchange = () => {
  console.log("wasi el menu");

  resetNav(hamburgerIcon, closeIcon, nav);
};
