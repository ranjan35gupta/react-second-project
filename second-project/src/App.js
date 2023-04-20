import logo from './logo.svg';
import './App.css';
import { Invitation } from './ReactComponent/Invitation';

function App() {
  const name="JaGdish"
  const title= "Birthday party Invitation"
  const email = "JaGdish@gmail.com"
  return (
    <div className="App">
      < Invitation name={name} title={title} email={email} event ="birthday party" 
        name1="Ritu" name2="Saurabh" name3="Kartik" place = "Green field Avenue" 
      
      />
    </div>
  );
}

export default App;
