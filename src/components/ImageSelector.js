import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

import COLORS from '../constants/Colors'
import { useDispatch } from 'react-redux'
import { addPic } from '../store/actions/auth.actions'

const ImageSelector = ({userPic}) => {

  const dispatch = useDispatch()

  const VerifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()
    console.log(status)
    if (status !== 'granted') {
      Alert.alert('Permisos insuficientes')
      return false
    }
    return true

  }

  const handlerTakeImage = async () => {
    const isCameraOk = await VerifyPermissions()
    if (!isCameraOk) return

    const image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5
    })
    console.log(image.assets[0].uri)
    dispatch(addPic(image.assets[0]?.uri))
  }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!userPic
          ? (<Text>No hay imagen seleccionada...</Text>)
          : (<Image style={styles.image} source={{ uri: userPic }} />)
        }
      </View>
      <Button
        title="Add Profile Picture"
        color={COLORS.green}
        onPress={handlerTakeImage}
      />
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: 200,
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.green,
    borderWidth: 1
  },
  image: {
    width: '100%',
    height: '100%',
  }
})
