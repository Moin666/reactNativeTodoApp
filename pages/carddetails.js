import React from 'react';
import { View,Text } from 'react-native';

function CardDetails({navigation,route}) {
    console.log(route.params)
    return (
        <View style={{flex:1}}>
            <View>
                <Text style={{fontSize:20}}>Card Details</Text>
            </View>
            <View>
                <Text style={{fontSize:20}}>Title:{route.params.productDetails.title}</Text>
            </View>
            <View>
                <Text style={{fontSize:20}}>Category:{route.params.productDetails.category}</Text>
            </View>
            <View>
                <Text style={{fontSize:20}}>Rating:{route.params.productDetails.rating.rate}</Text>
            </View>
            <View>
                <Text   style={{fontSize:20}}>Image:{route.params.productDetails.image}</Text>
            </View>

        </View>
    );
}



export default CardDetails;