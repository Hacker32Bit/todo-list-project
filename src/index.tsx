import App from "app/App";
import ReactDOM from "react-dom/client";

import ThemeProvider from "app/providers/ThemeProvider/ui/ThemeProvider";
import ColorProvider from "app/providers/ColorProvider/ui/ColorProvider";
import { store } from "redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeProvider>
      <ColorProvider>
        <App />
      </ColorProvider>
    </ThemeProvider>
  </Provider>
);
