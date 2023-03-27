import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from '../constants/Colors'

const PokemonCard = ({ pokemon, onPress }) => {

  return (
    <Pressable style={styles.card} onPress={() => { onPress(pokemon) }}>
      <Image
        style={styles.image}
        source={{
          uri: pokemon.sprite,
        }}
      />
      <Text>{pokemon.name}</Text>
    </Pressable>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.accent,
    borderRadius: 10,
    width: 120,
    height: 150,
    alignItems: 'center',
    margin: 20
  },
  image: {
    width: 120,
    height: 120
  },
})