import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import styles from "./styles";

export default function Cart({navigation}){
    return(
        <View style={styles.container}>
            <Text>Cart</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Purcharge")}>
                <Text>Purcharge</Text>
            </TouchableOpacity>
        </View>
    )
}