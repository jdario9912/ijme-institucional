const selector = (name: string) => document.querySelector(name);
const selectorAll = (name: string) => document.querySelectorAll(name);

selector(".hamburger")?.addEventListener("click", () => {
  selector(".hamburger-icon")?.classList.toggle("hidden");
  selector(".close-icon")?.classList.toggle("hidden");

  const navMobile = selector(".nav-mobile");
  navMobile?.classList.toggle("-translate-x-full");

  const navLinks = selectorAll(".nav-links");

  navLinks?.forEach((link) => {
    link.classList.toggle("flex-col");
    link.classList.toggle("items-start");
    link.classList.toggle("bg-black");
    link.classList.toggle("text-slate-50");
    link.classList.toggle("px-2");
    link.classList.toggle("py-4");
    link.classList.toggle("h-screen");
    link.classList.toggle("top-0");
  });
});

selector(".list-link")?.addEventListener("click", () => {
  console.log("hola nav");
  
  // const navMobile = selector(".nav-mobile");
  // navMobile?.classList.remove("-translate-x-full");

  // const navLinks = selectorAll(".nav-links");

  // navLinks?.forEach((link) => {
  //   link.classList.remove("flex-col");
  //   link.classList.remove("items-start");
  //   link.classList.remove("bg-black");
  //   link.classList.remove("text-slate-50");
  //   link.classList.remove("px-2");
  //   link.classList.remove("py-4");
  //   link.classList.remove("h-screen");
  //   link.classList.remove("top-0");
  // });
});

const desktop = window.matchMedia("(min-width: 720px)")

desktop.addEventListener("change", (event
) => {
  if( event.matches){
    console.log("tamano ok");
    
  }
  
})