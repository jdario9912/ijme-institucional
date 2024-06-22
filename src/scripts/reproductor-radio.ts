const audio = document.getElementById("audio") as HTMLAudioElement;
const playBtn = document.getElementById("play") as HTMLButtonElement;
const stopBtn = document.getElementById("stop") as HTMLButtonElement;

const ocultar = "hidden";
const mostrar = "flex";

const toggleClasesBtn = {
  remover: (btn: HTMLButtonElement, clase: string) =>
    btn.classList.remove(clase),
  add: (btn: HTMLButtonElement, clase: string) => btn.classList.add(clase),
};

const accionesReproductor = {
  ocultarPlay: (
    playButton: HTMLButtonElement,
    stopButton: HTMLButtonElement
  ) => {
    toggleClasesBtn.remover(playButton, mostrar);
    toggleClasesBtn.add(playButton, ocultar);

    toggleClasesBtn.remover(stopButton, ocultar);
    toggleClasesBtn.add(stopButton, mostrar);
  },
  ocultarStop: (
    playButton: HTMLButtonElement,
    stopButton: HTMLButtonElement
  ) => {
    toggleClasesBtn.remover(playButton, ocultar);
    toggleClasesBtn.add(playButton, mostrar);

    toggleClasesBtn.remover(stopButton, mostrar);
    toggleClasesBtn.add(stopButton, ocultar);
  },
};

playBtn?.addEventListener("click", () => {
  audio.play();

  accionesReproductor.ocultarPlay(playBtn, stopBtn);
});

stopBtn?.addEventListener("click", () => {
  audio.pause();

  accionesReproductor.ocultarStop(playBtn, stopBtn);
});
