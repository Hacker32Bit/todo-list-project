import App from "app";
import ReactDOM from "react-dom/client";

import ThemeProvider from "theme/ThemeProvider";
import ColorProvider from "theme/ColorProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ThemeProvider>
    <ColorProvider>
      <App />
    </ColorProvider>
  </ThemeProvider>
);
