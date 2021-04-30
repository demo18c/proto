import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Canv from './pages/Canv';
import Overview from './pages/Overview';
import RadioTable from './pages/radio/RadioSpec';

function App() {
	return (
		<>
			<Router>
				<Sidebar />
				<Switch>
					<Route path="/overview" component={Overview} />
					<Route path="/hound" component={Canv} />
					<Route path="/radio" component={RadioTable} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
