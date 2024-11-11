import { useContext } from "react";
import { ToggleContext } from "./Toggle";

const Trigger = () => {
  const { toggleActive } = useContext(ToggleContext);

  return <button onClick={toggleActive}>Toggle Active</button>;
};

export default Trigger;
