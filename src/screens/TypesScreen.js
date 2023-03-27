import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

import COLORS from '../constants/Colors'


import TypesCard from '../components/TypesCard'

const TypesScreen = () => {
  const types = useSelector(state => state.types.types)
  
  return (
    <View style={styles.screen}>
      <FlatList
        data={types}
        renderItem={({ item }) => <TypesCard types={item} />}
        keyExtractor={item => item.type}
      />
    </View>
  )
}

export default TypesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    color: COLORS.black
  }
})