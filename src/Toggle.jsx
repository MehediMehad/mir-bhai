import { createContext, useState } from "react";

const ToggleContext = createContext();

const Toggle = ({ children }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive((prev) => !prev);

  return (
    <ToggleContext.Provider value={{ active, toggleActive }}>
      {children}
    </ToggleContext.Provider>
  );
};

export { ToggleContext };
export default Toggle;
