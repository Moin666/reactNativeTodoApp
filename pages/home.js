import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import axios from 'axios';
import CustomCard from '../components/card';

function Home({navigation}) {
  const [productDetails, setProductDetails] = useState([]);
//   const url = 'https://fakestoreapi.com/products/1';
  const url = 'https://fakestoreapi.com/products/1';

  const getData = async () => {
    const {data} = await axios.get(url);
    setProductDetails(data);
    try {
 
    } catch (e) {

    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(productDetails)
  return (
    <View style={{flex: 1,flexDirection:'row'}}>
      <TouchableOpacity style={{flex:1}} onPress  = {()=>{navigation.navigate('carddetails',{productDetails})}} >
      <View style={{flex: 0.8, backgroundColor: 'orange',justifyContent:'center',alignItems:'center'}}>
        <CustomCard
          imagePath={productDetails.image}
          title= {productDetails? productDetails.title : ""}
          Category={productDetails? productDetails.category:""}
          Rating={productDetails? productDetails.category:""}
          />    
      </View>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 150,
  },
});

export default Home;
