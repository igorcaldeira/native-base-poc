import "./styles.css";
import { NativeBaseProvider } from "native-base";
import theme, { ITheme } from "./theme";
import Example from "./components/Example";

// Making the custom theme typing available
declare module "native-base" {
  interface ICustomTheme extends ITheme {}
}

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Example />
    </NativeBaseProvider>
  );
}
