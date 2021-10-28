import React, { useState, useRef } from 'react'
import AddButton from '../Buttons/AddButton';
import { View } from 'react-native';
import ProductInput from '../Inputs/ProductInput';

 const AddProduct = (props) => {
     const {handleProducts} = props.route.params;
     const [product, setProduct] = useState();
     const myInput = useRef();
     const handleNewProduct = () => {
         handleProducts((current) => [{id:current.length+1, name: product},...current])
     }
    
    return (
        <View style={{flex: 1, backgroundColor: '#ffffffd5',alignItems: 'center', justifyContent: 'center'}}>
            <ProductInput onChangeText={setProduct} refInput={myInput}/>
            <AddButton title="➕ Add product" bgColor="#ff5858" onPress={handleNewProduct}/>
        </View>
    )
}

export default AddProduct