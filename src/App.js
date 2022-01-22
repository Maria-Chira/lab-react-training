import './App.css';
import IdCard from './IdCard';
import Greetings from './Greetings';

function App() {
  return (
    <div className="App">
      <div className="IdCardsList">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height="178"
          birth="1992-07-14"
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />
        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height="172"
          birth="1988-05-11"
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
      </div>
      <div>
        <Greetings language="de" children="Ludwig" />
        <Greetings language="fr" children="Francois" />
        <Greetings language="en" children="John" />
        <Greetings language="es" children="Marta" />
      </div>
    </div>
  );
}

export default App;
