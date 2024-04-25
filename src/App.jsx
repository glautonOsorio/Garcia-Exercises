import { Button } from "@mui/material";
import { InputComponent } from "./components/Input/Input.component";
import { useContext } from "react";
import { ThemeContext } from "./contexts/Theme.context";

function App() {
  const { changeTheme, theme } = useContext(ThemeContext);
  return (
    <>
      <InputComponent />
      <Button onClick={changeTheme}> Teste teste</Button>
    </>
  );
}

export default App;
