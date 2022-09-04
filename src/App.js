import { useEffect } from 'react';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList'
import Searcher from './components/Searcher/Searcher';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonsDetailed } from './redux/actions';
import logo from './statics/logo.svg';
import { Spin } from 'antd';

function App() {

  // I rename  the objects that we currently have in the rootReducer, there we have (data) and (loading), 
  // therefore in the useSelector I  destructure the data, in this case ({data, loading }) is equal 
  // to the whole state, and just rename the data inside the object that is realy that I need to spread the data,
  // in this case were pokemons and loadingStatus, and with the same name I receive the data in the lefth side of the equal ('=')
  
  const {pokemons, loadingStatus } = useSelector( ({data, loading}) => (
    { pokemons : data.pokemons, loadingStatus: loading.loading}) 
  );

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
        loadingStatus
        ? <Spin size={'large'}/> 
        : <PokemonList pokemons={pokemons}/>
      }
    </div>
  );
}

export default App;
