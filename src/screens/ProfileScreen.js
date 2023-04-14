import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../store/actions/auth.actions';
import ImageSelector from '../components/ImageSelector';


const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <View style={styles.container}>
      <ImageSelector userPic={user.userPic}/>
      <Text style={styles.name}>{user.userName}</Text>
      <Text style={styles.email}>{user.userEmail}</Text>
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    marginBottom: 20,
  },
  signOutButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signOutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});