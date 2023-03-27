import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import COLORS from '../constants/Colors'
import PokemonCard from '../components/PokemonCard'
import { removeFavorite } from '../store/actions/favorites.action'

const FavoritesPokemonScreen = () => {

  const pokemons = useSelector(state => state.favorites.favPokemons)
  const dispatch = useDispatch()

  const handlerOnPressItem = (item) => {
    dispatch(removeFavorite(item.id))
  }

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

export default FavoritesPokemonScreen

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