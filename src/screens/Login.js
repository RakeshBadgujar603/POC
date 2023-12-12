import { StyleSheet, Text, View,Button, TextInput } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {

    const onPresslogin= async()=>{
    await AsyncStorage.setItem("isLogedIn","true")
    await AsyncStorage.setItem("userName","Rakesh")
    await AsyncStorage.setItem("mNo","981172625")
    await AsyncStorage.setItem("balance","1500")
    await AsyncStorage.setItem("desigination","React-native developer")
    await AsyncStorage.setItem("activeSince","2015")
    navigation.navigate("NewScreen")

    }
    
  return (
    <View>
      <Text style={{fontSize:60,textAlign:"center"}}>Login</Text>

      <TextInput
      placeholder='Mobile no'
      style={{borderWidth:1,marginHorizontal:10,marginTop:10,paddingHorizontal:10}}
      />

      <TextInput
      placeholder='OTP'
      style={{borderWidth:1,marginHorizontal:10,marginTop:10,paddingHorizontal:10,marginBottom:10}}
      />
      <Button
      title="login"
      onPress={onPresslogin}
      />
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})