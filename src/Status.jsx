import { useContext } from "react";
import { ToggleContext } from "./Toggle";

const Status = () => {
  const { active } = useContext(ToggleContext);

  return <p>Status: {active ? "Active" : "Inactive"}</p>;
};

export default Status;
