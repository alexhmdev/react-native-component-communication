import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Counter from './components/Pages/Counter';
import AddProduct from './components/Pages/AddProduct';

function ProductScreen({ product }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{product}!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default function App() {

  const [products, setProducts] = useState([]);


  useEffect(() => {
    console.log(products);
  }, [products])
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Counter") {
              iconName = focused
                ? "hourglass"
                : "hourglass-outline";
            } else if (route.name === "Add product") {
              iconName = focused
                ? "add-circle"
                : "add-circle-outline";
            } else if (route.name === "Cart") {
              iconName = focused
                ? "cart"
                : "cart-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "grey",
        })}
      >
        <Tab.Screen name="Counter" component={Counter} />
        <Tab.Screen name="Add product" component={AddProduct} initialParams={{ handleProducts: setProducts }} />
        <Tab.Screen name="Cart" component={ProductScreen} initialParams={products} />
      </Tab.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
