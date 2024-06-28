const onRadioPlay = "onRadioPlay";

const setRadioOn = () =>
  globalThis.localStorage.setItem(onRadioPlay, JSON.stringify(true));

const setRadioOff = () =>
  globalThis.localStorage.setItem(onRadioPlay, JSON.stringify(false));

export const radioIsPlaying = () => {
  const radioPlay = globalThis.localStorage.getItem(onRadioPlay);
  return JSON.parse(radioPlay!);
};

export const audio = document.getElementById("audio") as HTMLAudioElement;
export const playBtn = document.getElementById("play") as HTMLButtonElement;
export const stopBtn = document.getElementById("stop") as HTMLButtonElement;

const ocultar = "hidden";
const mostrar = "flex";

const toggleClasesBtn = {
  remover: (btn: HTMLButtonElement, clase: string) =>
    btn.classList.remove(clase),
  add: (btn: HTMLButtonElement, clase: string) => btn.classList.add(clase),
};

export const iconoRadio = {
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

// falta ver si onPlay es true o false para mostrar icono de play u stop
playBtn?.addEventListener("click", () => {
  setRadioOn();
  audio.play();
  iconoRadio.ocultarPlay(playBtn, stopBtn);
});

stopBtn?.addEventListener("click", () => {
  setRadioOff();
  audio.pause();
  iconoRadio.ocultarStop(playBtn, stopBtn);
});
