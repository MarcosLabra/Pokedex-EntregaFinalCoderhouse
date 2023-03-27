import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Colors from '../constants/Colors'

const TypesCard = ({ types }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.bold}>Type</Text>
      <Text>{types.type}</Text>
      <Text style={styles.bold}>Double damage from:</Text>
      <Text>{types.double_damage_from}</Text>
      <Text style={styles.bold}>Double damage to:</Text>
      <Text>{types.double_damage_to}</Text>
    </View>
  )
}

export default TypesCard

const styles = StyleSheet.create({
  card: {
    margin: 20,
    backgroundColor: Colors.accent,
    padding: 20
  },
  bold: {
    fontWeight: 700
  }

})