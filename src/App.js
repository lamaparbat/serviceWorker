import { serviceWorker} from './serviceWorker'

function App() {
  serviceWorker()
  return (
    <div className="App">
      <p>This is the pwa(Progressive Web App) Service Worker Demo</p>
    </div>
  );
}

export default App;
