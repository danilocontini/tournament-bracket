import './App.scss';
import Tournament from './components/Tournament/Tournament';
import tournamentData from './mocks/data.json';

function App() {
  return (
    <div className="App">
      <Tournament tournament={tournamentData} />
    </div>
  );
}

export default App;
