import React,{useEffect} from 'react'
import { View, Alert, Vibration } from 'react-native'
import List from '../List/List'
const Cart = ({products, setProducts}) => {
     const deleteProduct = (e) => {
         Vibration.vibrate([0,100])
    Alert.alert(
      "Delete product",
      `Are you sure you want to delete ${e.name}?`,
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => setProducts((current) => current = current.filter(item => item.id !== e.id)) }
      ])
  }
    return (
        <View style={{ flex: 1,
        backgroundColor: "#ffffffd5",
        alignItems: "center",
        justifyContent: "center"}}>
            <List products={products} deleteProduct={deleteProduct}/>
        </View>
    )
}

export default Cart
