import RadioIcon from "./icons/radio";

const Radio = () => {
  const escucharRadio = () => {
    console.log("escuchando radio");
  };
  return (
    <button onClick={escucharRadio}>
      Radio
      <RadioIcon />
    </button>
  );
};

export default Radio;
