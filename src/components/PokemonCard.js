import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import COLORS from '../constants/Colors'

const PokemonCard = ({ pokemon, onSelect, onPress, isFav }) => {

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.pokemon} onPress={() => onSelect(pokemon)}>
        <Image
          style={styles.image}
          source={{
            uri: pokemon.sprite,
          }}
        />
        <Text style={styles.text}>{pokemon.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.favorite} onPress={() => onPress(pokemon)}>
      {isFav ?
        <MaterialIcons name="favorite" size={20} color={COLORS.white} /> :
        <MaterialIcons name="favorite-outline" size={20} color={COLORS.white} />
      }
      </TouchableOpacity>
    </View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 20,
    width: 120,
  },
  pokemon: {
    backgroundColor: COLORS.accent,
    width: '100%',
    height: 150,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: 120,
    height: 120
  },
  text: {
    fontFamily: 'OpenSans_700Bold',
    fontSize: 14,
    color: COLORS.black
  },
  favorite: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: COLORS.green,
    height: 30,
    justifyContent: 'center',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  favoriteText: {
    color: COLORS.white,
    fontFamily: 'OpenSans_700Bold',
    fontSize: 13
  }
})