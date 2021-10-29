import React, { useState, useRef } from 'react';
import AddButton from '../Buttons/AddButton';
import { View } from 'react-native';
import ProductInput from '../Inputs/ProductInput';
import 'react-native-get-random-values'
import uuid from 'react-native-uuid'
 const AddProduct = (props) => {
     const {handleProducts} = props.route.params;
     const [product, setProduct] = useState();
     const myInput = useRef();
     const handleNewProduct = () => {
         handleProducts((current) => [{id: uuid.v4(), name: product},...current])
         myInput.current.clear()
     }
    
    return (
        <View style={{flex: 1, backgroundColor: '#ffffffd5',alignItems: 'center', justifyContent: 'center'}}>
            <ProductInput submitAndClear={true} onChangeText={setProduct} refInput={myInput}/>
            <AddButton title="➕ Add product" bgColor="#ff5858" onPress={handleNewProduct}/>
        </View>
    )
}

export default AddProduct