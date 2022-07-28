import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Button,Alert  } from 'react-native';

const TodoApp = () => {
  const [todo,setTodo] = useState({});
  const [inputData,setInPutData] = useState([])
  const add = () =>{
    let data = [...inputData]
   
    data.push({...todo})
    // setTodo({})
    setInPutData([...data])
    console.log(inputData)
  }

  const deleteAll = () =>{
    setInPutData([])
  }

  const deleteToDo  =(data)=>{
    let delData = inputData.filter(item => item !== data) 
    setInPutData(delData)
  }

  const EditData = (data) =>{
    Alert.prompt(
      "Alert Title",
      // "My Alert Msg",
      // [
      //   {
      //     text: "submit",
      //     onPress: () => console.log("sumit Pressed")
      //   },
      //   {
      //     text: "cancel",
      //     onPress: () => console.log("Cancel Pressed")
      //   }
      // ],"plain-text",'Name'
    );

    console.log(data)
  }

  console.log(inputData)

 
  return (
    <View style = {{flex:1}} >
        <View style = {[styles.navbarColorView,{flex : 0.1}]} >
            <Text style ={{fontSize:20,color:"white",fontWeight:"bold"}}>To DO List</Text>
        </View>
        <View style = {[styles.todoSection,{flex : 0.8}]} >
     {inputData.map(item =><View key={item.inputData} style ={{flex:0.2,marginTop:10,borderWidth:2, alignContent:"center",alignItems:'center',backgroundColor:"white",flexDirection:'row',justifyContent:'space-around'}}><View style={[{flex:0.8}]}><Text value = {todo.inputData} style={{fontSize:30}}>{item.inputTodo}</Text></View><View style ={[styles.del,{flex:0.2,height:30,padding:2,borderWidth:1,borderRadius:2}]}><TouchableOpacity onPress={()=> {deleteToDo(item)}}><Text style ={{fontSize:20,color:"white"}}>Delete</Text></TouchableOpacity></View><View style={{flex:0.2}}><TouchableOpacity onPress={() => {EditData(item)}}><Text style ={{fontSize:20}}>Edit</Text></TouchableOpacity></View></View>)}
        </View>
        <View style = {[styles.userInputSection,{flex : 0.1},{flexDirection:'row'}]} >
                  <View style = {{flex:0.5}}>
                      <TextInput onChangeText={(e)=>{setTodo({...todo,inputTodo:e })}} placeholder='Enter TODO' style ={{backgroundColor:'white'}} />
                  </View>
                  <View style ={{flex:0.3}}>
                    <TouchableOpacity  onPress={add}   style ={[styles.btn,{alignItems:'center',justifyContent:'center'},{  backgroundColor:"purple",}]}  >
                      <Text style ={{fontSize:18}}>Press Here</Text>
                    </TouchableOpacity>              
                  </View>      
                  <View style ={{flex:0.3}}>
                    <TouchableOpacity  onPress={deleteAll}   style ={[styles.btn,{alignItems:'center',justifyContent:'center'},{  backgroundColor:"red",}]}  >
                      <Text style ={{fontSize:18}}>Delete All</Text>
                    </TouchableOpacity>
                    
                  </View>       
        </View>
     

    </View>
    
  )
}

const styles = StyleSheet.create({
  navbarColorView: {
    backgroundColor:"#2081C3",
    alignItems:'center',
    justifyContent:'center' 
  },
  todoSection:{
    // backgroundColor:"orange"
  },
  userInputSection:{
    backgroundColor:"red"
  },
  btn:{
    
      height:50

  },
  textInput:{
    width:292,
  },
  del:{
    backgroundColor:'red',
    //borderRadius:"10px"
  }
})


export default TodoApp;



