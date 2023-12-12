import { StyleSheet, Image, View } from 'react-native'
import React,{useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SplashScreen = ({navigation}) => {
  
    useEffect(() => {
      
      async function fetchData(){
        const value=await AsyncStorage.getItem("isLogedIn")
        if(value !==null && value=="true"){
            setTimeout(()=>{
                navigation.navigate("NewScreen")
            },1000)
        }else{
            navigation.navigate("Login")
        }
      }
      fetchData();
    }, [navigation])
    

  return (
    <View style={{flex:1,justifyContent:"center",backgroundColor:"white"}}>
      <Image
      source={require("../assets/wht.jpeg")}
      style={{alignSelf:"center"}}
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})