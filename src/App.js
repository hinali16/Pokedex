import MenuDrop from './components/MenuDrops';
import './components/BodyPokedex.css';

function App() {
  return (
      <div className="pokedex_body">
        <MenuDrop />
        <div className="pokedex_footer">
            <footer>Aplicação para fins estudantis &copy;</footer>
        </div>
      </div>
  )
}

export default App;