import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'




const Home = ({ navigation }) => {

 

  const data = [{ title: "Manoj gera", description: "hello", src: require("../assets/Ratan.png"), time:"10:00 PM" },
  { title: "rahul badgujar", description: "kya hal hain bhai", src: require("../assets/Adani.png"),time:"11:00 PM",seen:4 },
  { title: "jai Kumar", description: "tum bato", src: require("../assets/green.jpeg"),time:"12:00 PM" },
  { title: "sunil", description: "hi", src: require("../assets/rakesh.jpg"),time:"12:00 PM",seen:10},
  { title: "karan malhotra", description: "kaha pe hai bhai", src: require("../assets/Home.jpeg"),time:"12:00 PM"},
  { title: "gaurav atri", description: "hello", src: require("../assets/Grow.png"),time:"12:00 PM"},
  { title: "rahul badgujar", description: "hello", src: require("../assets/Adani.png"),time:"11:00 PM" },
  { title: "jai Kumar", description: "hello", src: require("../assets/green.jpeg"),time:"12:00 PM" },
  { title: "sunil", description: "hello", src: require("../assets/rakesh.jpg"),time:"12:00 PM"},
  { title: "karan malhotra", description: "hello", src: require("../assets/Home.jpeg"),time:"12:00 PM"},
  { title: "gaurav atri", description: "hello", src: require("../assets/Grow.png"),time:"12:00 PM"},
  ]

  const onRenderItem = ({ item }) => {
    return (
      <View style={{ minHeight: 100,backgroundColor:"white",flex:1, marginTop: 10, marginHorizontal: 10, borderRadius: 25, flexDirection: "row" }}>
        <Image source={item.src} style={{
          flex:13,
          width: 50,
          height: 50,
          borderRadius: 25,
          resizeMode: 'contain',
          margin: 8
        }}></Image>

        <View style={{ flex:70 }}>
          <Text style={{ fontSize: 21, paddingLeft: 20, fontWeight: "bold" }}>{item.title}</Text>
          <Text style={{ fontSize: 18, paddingLeft: 20 }}>{item.description}</Text>
        </View>
        
        <View style={{flex:17}}>
        <Text style={{color:"green",fontWeight:"400"}}>{item.time}</Text>

        </View>

        
      </View>
    )
  }

  return (
    <View style={{backgroundColor:"white"}}>


      <FlatList
        data={data}
        renderItem={onRenderItem}
        
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})