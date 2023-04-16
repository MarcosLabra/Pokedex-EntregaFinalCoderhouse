import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import COLORS from '../constants/Colors'
import PokemonCard from '../components/PokemonCard'
import { removeFavorite, getFavorites } from '../store/actions/favorites.action'

const FavoritesPokemonScreen = ({ navigation }) => {

  const pokemons = useSelector(state => state.favorites.favPokemons)
  const user = useSelector(state => state.auth.userId)
  const dispatch = useDispatch()

  const handlerOnPressItem = (item) => {
    dispatch(removeFavorite(item.id, user))
  }
  const onSelectPokemon = item => {
    navigation.navigate('pokemonDetail', {
      pokemonId: item.id,
      pokemonName: item.name,
      pokemonUrl: item.url
    })
  }

  React.useEffect(() => {
    dispatch(getFavorites(user))
  })

  return (
    <View style={styles.screen}>
      <FlatList
        numColumns={2}
        data={pokemons}
        renderItem={({ item }) => <PokemonCard
          pokemon={item}
          onSelect={() => onSelectPokemon(item)}
          onPress={() => handlerOnPressItem(item)}
        />}
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