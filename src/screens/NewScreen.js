import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const NewScreen = () => {

  const [visible, setVisible] = useState(false)
  const [userName, setUserName] = useState("")
  const [position, setPosition] = useState("")
  const [rupees, setRupees] = useState("")

  useEffect(() => {

    setTimeout(() => {
      setVisible(true)
    }, 2000)
  }, [visible])

  useEffect(() => {

    async function fetchData() {
      const value = await AsyncStorage.getItem("userName")
      if (value !== null) {
        setUserName( value)
      }
      const value2 = await AsyncStorage.getItem("desigination")
      if (value2 !== null) {
        setPosition( value2)
      }
      const value3 = await AsyncStorage.getItem("balance")
      if (value3 !== null) {
        setRupees( value3)
      }
    }
    fetchData();
  }, [])

  return (
    <View style={{ flex: 1, alignSelf: "center", justifyContent: "center" }}>
      <Text>{userName}</Text>
      <Text>{position}</Text>
      <Text>{rupees}</Text>

      {visible ? <Text style={{ fontSize: 33, color: "red", fontWeight: "bold" }}>New Screen</Text>
        :
        <ActivityIndicator
          size={'large'}
          color={"red"}
        />}

    </View>
  )
}

export default NewScreen

const styles = StyleSheet.create({})