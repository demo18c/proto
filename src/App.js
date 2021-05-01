import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import RadioComp from './pages/radio/RadioComp';
import Overview from './pages/Overview';
import RadioSpec from './pages/radio/RadioSpec';

function App() {
	return (
		<>
			<Router>
				<Sidebar />
				<Switch>
					<Route path="/overview" component={Overview} />
					<Route path="/radiocomp" component={RadioComp} />
					<Route path="/radiospec" component={RadioSpec} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
