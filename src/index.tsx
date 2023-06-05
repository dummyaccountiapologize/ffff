import 'styles/App.css';
import ReactDOM from 'react-dom';
import App from 'components/App';
import 'helpers/global';
import { AppProvider } from 'context/AppContext';
import reportWebVitals from 'reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.render(
  <AppProvider>
    <Router>
    <App />
    </Router>
  </AppProvider>,

  document.getElementById('root')
);

reportWebVitals();
