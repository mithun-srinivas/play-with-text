import './App.css';
import NavBar from './components/NavBar'
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App" >
      < NavBar title={'Play With The Text'}/>
      <TextForm title={'Enter The Text To Play Upon'}/>
    </div>
  );
}

export default App;
