import { useEffect } from 'react';
import './App.css';
import PokemonList from './components/PokemonList/PokemonList'
import Searcher from './components/Searcher/Searcher';
import { useSelector, useDispatch } from 'react-redux';
import logo from './statics/logo.svg';
import { Spin } from 'antd';
import { fetchPokemonsWithDetails, setFilteredPokemons } from './redux/slices/dataSlice';

function App() {

  // I rename  the objects that we currently have in the rootReducer, there we have (data) and (loading), 
  // therefore in the useSelector I  destructure the data, in this case ({data, loading }) is equal 
  // to the whole state, and just rename the data inside the object that is realy that I need to spread the data,
  // in this case were pokemons and loadingStatus, and with the same name I receive the data in the lefth side of the equal ('=')
  
  const {pokemons, filteredPokemons, loadingStatus } = useSelector( ({data, loading}) => (
    { pokemons : data.pokemons, filteredPokemons: data.filteredPokemons, loadingStatus: loading.loading}) 
  );

  const dispatch = useDispatch();

  useEffect( () => {
      dispatch( fetchPokemonsWithDetails() )
  },[])

  const onChange = ( value ) => {
    dispatch( setFilteredPokemons( value.target.value) )
}

  return (
    <div className="App">
      <div className='searchContainer'>
        <img src={logo} alt='logo'/>
        <Searcher onChange={onChange}/>
      </div>
      {
        loadingStatus
        ? <Spin size={'large'}/> 
        : <PokemonList pokemons={filteredPokemons}/>
      }
    </div>
  );
}

export default App;
