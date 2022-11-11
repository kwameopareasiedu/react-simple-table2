import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  // primaryColor: "",
  fontFamily: "'Source Sans Pro', sans-serif"
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <MantineProvider theme={theme} withNormalizeCSS>
      <App />
    </MantineProvider>
  </StrictMode>
);
