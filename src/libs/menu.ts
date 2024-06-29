type ElementoHTML = HTMLElement | null;

export const toggleHidden = (element: ElementoHTML) =>
  element?.classList.toggle("hidden");

const addClass = (element: ElementoHTML, className: string) =>
  element?.classList.add(className);

const removeClass = (element: ElementoHTML, className: string) =>
  element?.classList.remove(className);

export const selector = (name: string): ElementoHTML =>
  document.querySelector(name);

export const resetNav = (
  hamburgerIcon: ElementoHTML,
  closeIcon: ElementoHTML,
  nav: ElementoHTML
) => {
  toggleHidden(hamburgerIcon);
  toggleHidden(closeIcon);

  nav?.classList.toggle("translate-x-0");
};

export const ocultarNav = (nav: ElementoHTML) => {
  addClass(nav, "hidden-nav");
  removeClass(nav, "show-nav");
  addClass(nav, "-translate-x-full");
};

export const mostrarNav = (nav: ElementoHTML) => {
  addClass(nav, "show-nav");
  removeClass(nav, "hidden-nav");
  removeClass(nav, "-translate-x-full");
};
