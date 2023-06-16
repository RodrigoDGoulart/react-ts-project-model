import { Provider, TemaProvider } from "./contexts";
import AppRouter from "./routes";

export default function App() {
  return (
    <TemaProvider>
      <Provider>
        <AppRouter />
      </Provider>
    </TemaProvider>
  );
}