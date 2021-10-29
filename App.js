import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Counter from './components/Pages/Counter';
import AddProduct from './components/Pages/AddProduct';
import Cart from './components/Pages/Cart';
const Tab = createBottomTabNavigator();
export default function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(products);
  }, [products])
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
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
          tabBarInactiveTintColor: "grey"
        })}
        initialRouteName="Add product"
      >
        <Tab.Screen name="Counter" component={Counter} options={{
          tabBarActiveBackgroundColor: '#F5F4F4',
          tabBarActiveTintColor: '#0000ff',
          tabBarHideOnKeyboard: true,
          headerShadowVisible: true,
          headerStyle: { backgroundColor: 'blue' },
          headerTintColor: 'white',
        }} />
        <Tab.Screen name="Add product" component={AddProduct} initialParams={{ handleProducts: setProducts }}
          options={{
            tabBarActiveBackgroundColor: '#F5F4F4',
            tabBarActiveTintColor: '#dc143c',
            tabBarHideOnKeyboard: true,
            headerShadowVisible: true,
            headerStyle: { backgroundColor: '#ff5858' },
            headerTintColor: 'white',
          }} />
        <Tab.Screen name="Cart" options={{
          tabBarActiveBackgroundColor: '#F5F4F4',
          tabBarActiveTintColor: '#8554d3d4',
          tabBarHideOnKeyboard: true,
          headerShadowVisible: true,
          headerStyle: { backgroundColor: '#8554d3d4' },
          headerTintColor: 'white',
        }}>
          {() => <Cart products={products} setProducts={setProducts} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
