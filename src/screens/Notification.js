import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'



const Notification = ({ navigation }) => {


  const onPresslogout=async()=>{
    await AsyncStorage.setItem("isLogedIn","false")
    navigation.navigate("SplashScreen")
  }

  return (
    <View style={{ flex: 1 }}>

      <View style={{flexDirection:"row",marginTop:10,backgroundColor:"skyblue",flex:1}}>

        <View style={{flex:1,backgroundColor:"skyblue"}}>
          <Text style={{marginLeft:10}}>Brand Mall</Text>
         
        </View>

        <View style={{flex:2,marginRight:10}}>
          <TextInput
            style={{ borderWidth: 1,paddingHorizontal:10,borderRadius:10,backgroundColor:"white" }}
            placeholder='Search for products'
          />
        </View>
      </View>

      <View style={{flex:1.5}}>

      </View>

      <Button
      title="logout"
      onPress={onPresslogout}
      />

    </View>
  )
}

export default Notification

const styles = StyleSheet.create({})