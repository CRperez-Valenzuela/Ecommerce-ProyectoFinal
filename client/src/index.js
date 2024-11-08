import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';

import store from "../src/Redux/Store"
import App from './App';
import 'primereact/resources/themes/saga-blue/theme.css';  // O cualquier otro tema que prefieras

import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import { SocketProvider } from "./Components/Socket/SocketContext";

// Importar estilos de PrimeReact
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './custom-theme.css';  // Archivo CSS personalizado para ajustes adicionales

const GOOGLE_CLIENT_ID= "290923168098-s19huo4b47taoocnunmdis6g77qlchc3.apps.googleusercontent.com"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <SocketProvider>
          <App />
        </SocketProvider>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>
);

reportWebVitals(sendToVercelAnalytics);
