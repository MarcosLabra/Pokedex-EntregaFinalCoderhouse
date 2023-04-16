import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import COLORS from '../constants/Colors'

const PokemonCard = ({ pokemon, onSelect, onPress }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={() => onSelect(pokemon)}>
        <Image
          style={styles.image}
          source={{
            uri: pokemon.sprite,
          }}
        />
        <Text>{pokemon.name}</Text>
        <Button
          title='Add to favorites'
          color={COLORS.green}
          onPress={() => onPress(pokemon)}
        />
      </TouchableOpacity>
    </View>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20
  },
  card: {
    backgroundColor: COLORS.accent,
    borderRadius: 10,
    width: 120,
    height: 150,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120
  },
  buttonContainer: {
    width: 120,
  }
})