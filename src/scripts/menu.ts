type ElementoHTML = HTMLElement | null;

const selector = (name: string): ElementoHTML => document.querySelector(name);

const toggleHidden = (element: ElementoHTML) =>
  element?.classList.toggle("hidden");

const resetNav = (
  hamburgerIcon: ElementoHTML,
  closeIcon: ElementoHTML,
  nav: ElementoHTML
) => {
  toggleHidden(hamburgerIcon);
  toggleHidden(closeIcon);

  nav?.classList.toggle("translate-x-0");
};

// DOM
const hamburger = selector(".hamburger");
const hamburgerIcon = selector(".hamburger-icon");
const closeIcon = selector(".close-icon");
const nav = selector("nav");

// Events
hamburger?.addEventListener("click", () =>
  resetNav(hamburgerIcon, closeIcon, nav)
);

window.onhashchange = () => resetNav(hamburgerIcon, closeIcon, nav);
