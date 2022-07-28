import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Touchable,
  TouchableOpacity,
} from 'react-native';

function CustomCard({imagePath, title, Category, Rating}) {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Image style={[styles.imgSize,{resizeMode:'contain'}]} source={{uri: imagePath}} />
      </View>

      <View style={[styles.title, {flex: 0.1,marginTop:5}]}>
        <Text style={{fontSize: 16}}>Title : {title} </Text>
      </View>
      <View style={[styles.title, {flex: 0.1}]}>
        <Text style={{fontSize: 16}}>Category : {Category} </Text>
      </View>
      <View style={[styles.title, {flex: 0.1}]}>
        <Text style={{fontSize: 16}}>Rating : {Rating}</Text>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    width:250,
    height:300,
    borderWidth: 1,
    borderRadius:5,
    backgroundColor:"white",
    alignItems: 'center',
    opacity:0.9
  },
  imgSize: {
    width: '100%',
    height: '100%',
  },
  title: {
    alignItems: 'center',
    width:250,
    height:200,
  },
});

export default CustomCard;
