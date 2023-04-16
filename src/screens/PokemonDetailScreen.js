import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonDetail } from '../store/actions/pokemonDetail.action'

import COLORS from '../constants/Colors'

const PokemonDetailScreen = ({ route }) => {
	const dispatch = useDispatch()
	const pokemon = useSelector(state => state.pokemonDetail.pokemonData)

	React.useEffect(() => {
		dispatch(getPokemonDetail(route.params.pokemonUrl))
	}, [])

	return (
		<View style={styles.screen}>
			<Image style={styles.image} source={{ uri: pokemon.image }} />
			<Text style={styles.title}>Weight</Text>
			<Text style={styles.text}>{pokemon.weight} kg</Text>
			<Text style={styles.title}>Height</Text>
			<Text style={styles.text}>{pokemon.height} cm</Text>
			<Text style={styles.title}>Types</Text>
			{pokemon.types.map((type) => (
        <Text style={styles.text} key={type}>-{type}-</Text>
      ))}
		</View>
	)
}

export default PokemonDetailScreen

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		paddingTop:20,
		alignItems: 'center'
	},
	image: {
		width: 250,
		height: 250,
	},
	title: {
		fontSize: 20,
		fontFamily: 'OpenSans_700Bold',
		color: COLORS.black,
		marginTop:20
	},
	text: {
		fontSize: 20,
		fontFamily: 'OpenSans_400Regular',
		color: COLORS.black
	},
})