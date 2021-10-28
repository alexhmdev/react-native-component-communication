import React,{useEffect} from 'react'
import { View, Text } from 'react-native'
import List from '../List/List'
const Cart = ({products}) => {
    return (
        <View style={{ flex: 1,
        backgroundColor: "#ffffffd5",
        alignItems: "center",
        justifyContent: "center"}}>
            <List products={products}/>
        </View>
    )
}

export default Cart
