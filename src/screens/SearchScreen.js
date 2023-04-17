import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, FlatList } from 'react-native';

import { getPokemonData } from '../utils/getPokemons';
import TypeCard from '../components/TypeCard';

import COLORS from '../constants/COLORS';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const pokemonInfo = await getPokemonData(searchTerm)
      setPokemonData(pokemonInfo);
      setError(null);
    } catch (error) {
      console.log(error);
      setPokemonData(null);
      setError('Cant find this pokemon');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder="Search Pokémon"
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <Button title="Search" onPress={handleSearch} />
      {pokemonData && (
        <View style={styles.pokemonContainer}>
          <Image style={styles.image} source={{ uri: pokemonData.image }} />
          <Text style={styles.title}>Weight</Text>
          <Text style={styles.text}>{pokemonData.weight} kg</Text>
          <Text style={styles.title}>Height</Text>
          <Text style={styles.text}>{pokemonData.height} cm</Text>
          <Text style={styles.title}>Types</Text>
          <FlatList
            data={pokemonData.types}
            renderItem={TypeCard}
            keyExtractor={(item) => item}
          />
        </View>
      )}
    </View>
  );
};

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
  pokemonContainer: {
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  title: {
    fontSize: 20,
    fontFamily: 'OpenSans_700Bold',
    color: COLORS.black,
    marginTop: 20
  },
  text: {
    fontSize: 20,
    fontFamily: 'OpenSans_400Regular',
    color: COLORS.black
  },
});
