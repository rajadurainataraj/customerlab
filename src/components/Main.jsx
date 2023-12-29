import { useState } from "react";
import Popup from "./Popup";
import Button from "./Button";

const Main = () => {
  const [isTrue, setIsTrue] = useState(false);
  function toggle() {
    setIsTrue(!isTrue);
  }
  return (
    <>
      <Button className="main-button" onClick={toggle}>
        Save segment
      </Button>
      {isTrue && <Popup toggle={toggle} />}
    </>
  );
};

export default Main;
