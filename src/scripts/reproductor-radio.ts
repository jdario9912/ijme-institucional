const onRadioPlay = "onRadioPlay";

const setRadioOn = () =>
  globalThis.localStorage.setItem(onRadioPlay, JSON.stringify(true));

const setRadioOff = () =>
  globalThis.localStorage.setItem(onRadioPlay, JSON.stringify(false));

const radioIsPlaying = () => {
  const radioPlay = globalThis.localStorage.getItem(onRadioPlay);
  return JSON.parse(radioPlay!);
};

const playingRadio = radioIsPlaying();

const audio = document.getElementById("audio") as HTMLAudioElement;

const radioCheckbox = document.querySelector(
  "input[name=radio]"
) as HTMLInputElement;

radioCheckbox?.addEventListener("change", () => {
  if (radioCheckbox.checked) {
    setRadioOn();
    audio.play();
  } else {
    audio.pause();
    setRadioOff();
  }
});

if (playingRadio) {
  audio.play();
  radioCheckbox.checked = true;
} else {
  radioCheckbox.checked = false;
  audio.pause();
}
