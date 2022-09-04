import { useEffect } from 'react';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList'
import Searcher from './components/Searcher/Searcher';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsDetailed } from './redux/actions';
import logo from './statics/logo.svg';
import { Spin } from 'antd';

function App() {

  const {pokemons, loading } = useSelector( state => state );
  const dispatch = useDispatch();

  useEffect( () => {
    const response = async() => {
      dispatch( getPokemonsDetailed() )
    }
    response();
  },[])

  return (
    <div className="App">
      <div className='searchContainer'>
        <img src={logo} alt='logo'/>
        <Searcher />
      </div>
      {
        loading 
        ? <Spin size={'large'}/> 
        : <PokemonList pokemons={pokemons}/>
      }
    </div>
  );
}

export default App;
