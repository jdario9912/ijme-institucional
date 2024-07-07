import { alias } from "@/libs/donaciones";

  const selector = (elemento: string): HTMLElement =>
    document.querySelector(elemento)!;

  const aliasBtn = selector("#alias");

  aliasBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText(alias);
  });