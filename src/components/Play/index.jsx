import "../../assets/styles/app.css";
import { useState } from "react";
import Playing from "../MusicPlaying";
import ButtonPlay from "./btn_play";

function Button({ sound, data }) {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };
  if (active === false) {
    return (
      <>
        <Playing data={data} active={active} />
        <ButtonPlay
          ToggleMode={ToggleMode}
          className="play-button"
          classNameIcon="play"
          soundFunc={() => sound.play()}
        />
      </>
    );
  }
  return (
    <>
      <Playing data={data} active={active} />
      <ButtonPlay
        ToggleMode={ToggleMode}
        className="pause-button"
        classNameIcon="pause"
        soundFunc={() => sound.pause()}
      />
    </>
  );
}

function Play({ sound, data }) {
  return (
    <>
      <div className="row">
        <Button data={data} sound={sound} />
      </div>
    </>
  );
}

export default Play;
