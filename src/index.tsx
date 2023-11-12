import App from "app/App";
import ReactDOM from "react-dom/client";

import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import ColorProvider from "app/providers/ColorProvider/ui/ColorProvider";

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
