import { BrowserRouter as Router } from 'react-router-dom';

import './components/shared/Icons/Icons';
import Routes from './components/Routes/Routes';

const App = props => {
    return (
        <Router>
            <Routes />
        </Router>
    );
};

export default App;
