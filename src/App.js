import './App.css';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import NavBar from './Componentes/NavBar/NavBar';


function App() {
  return (
    <div>
      <NavBar/>
      <div>
        <ItemListContainer greeting={"Bienvenidos a Merlina's"}/>
      </div>
    </div>
  );
}

export default App;
