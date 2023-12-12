import { StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { Button } from 'react-native-elements'

let selectIndex=-1

const Todoo = () => {

    const [data, setData] = useState(["Sita Ram", "Ram Ram ji"])
    const [name, setName] = useState('')


    const onPressAdd = () => {

        if(name==""){
            alert("kindly enter the name")
            return;
           }

        const existingList = [...data]
        existingList.push(name)
        setData(existingList)
        setName("")

    }

    const onPressDelete = (item, index) => {
        Alert.alert(
            '',
            'Are you sure you want to delete? ' + item,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'), style: 'cancel'
                },
                {
                    text: 'Sure yes I want to delete',
                    onPress: () => {
                        console.log('OK Pressed')

                        const existinList = [...data]
                        existinList.splice(index, 1)
                        setData(existinList)
                        console.log(index)
                    }
                },

            ],
            { cancelable: false }
        )
    }

    const onPressEdit=(item,index)=>{
        setName(item)
        selectIndex=index
        
    }

    const onPressUpdate=()=>{

       if(name==""){
        alert("kindly enter the name")
        return;
       }

        const existingList=[...data]
        existingList.splice(selectIndex,1,name)
        setData(existingList)
        setName("")
        selectIndex=-1
    }

   
    const onRenderItem = ({ item, index }) => {
        return (
            <View style={{ height: 100, borderRadius: 20, width: 350, backgroundColor: "black", marginTop: 10, marginHorizontal: 10, padding: 10 }}>
                <Text style={{ color: "white", fontSize: 44, textAlign: "center" }}>{item}</Text>

                <View style={{flexDirection:"row",alignSelf:"center"}}>
                    <View style={{ alignSelf: "center" ,marginRight:10}}>
                        <Button
                            title="Delet"
                            onPress={() => { onPressDelete(item, index) }}
                        />
                    </View>

                    <View style={{ alignSelf: "center" }}>
                        <Button
                            title="Edit"
                            onPress={() => { onPressEdit(item, index) }}
                        />
                    </View>
                </View>

            </View>
        )
    }

    return (
        <View style={{ flex: 1 }}>


            <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <TextInput
                    placeholder='Enter Your Name'
                    style={{ marginHorizontal: 10, marginTop: 10, paddingHorizontal: 10, borderWidth: 1 }}
                    value={name}
                    defaultValue={name}
                    onChangeText={(text) => { setName(text) }}
                />

                <View style={{ alignSelf: "center" }}>
                    <Button
                        title="+"
                        onPress={onPressAdd}
                    />
                </View>

                <View style={{ alignSelf: "center" }}>
                    <Button
                        title="Update"
                        onPress={onPressUpdate}
                    />
                </View>
            </View>

            <FlatList
                data={data}
                renderItem={onRenderItem}
            />
        </View>
    )
}

export default Todoo

const styles = StyleSheet.create({})