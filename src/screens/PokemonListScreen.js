import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import COLORS from '../constants/Colors'
import { getPokemons } from '../store/actions/pokemons.actions'
import { addFavorite } from '../store/actions/favorites.action'

import PokemonCard from '../components/PokemonCard'


const PokemonListScreen = () => {


  const pokemons = useSelector(state => state.pokemons.pokemonList)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getPokemons())
  }, [])


  const handlerOnPressItem = item => dispatch(addFavorite(item))

  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={pokemons}
        renderItem={({ item }) => <PokemonCard pokemon={item} onPress={handlerOnPressItem} />}
        keyExtractor={item => item.id}
      />
    </View >
  )
}

export default PokemonListScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    marginBottom: 20,
    color: COLORS.black
  }
})