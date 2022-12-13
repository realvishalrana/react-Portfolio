import { useContext } from "react";
import { Contact, Intro, ProductList, Toggle } from "./components";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      {/* <About /> */}
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
