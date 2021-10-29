import React from "react"
import styled from "styled-components/native"
import { FlatList,  } from "react-native"

const StyledSafeAreaView = styled.SafeAreaView`
    top: 0;
    height: 95%;
    width: 100%;
    align-self: center;
`
const StyledPressable = styled.Pressable`
    margin: 10px;
    background-color:#8554d3d4;
    padding: 5px;
    width: 50%;
    border-radius: 10px;
    align-self: center;
`
const StyledText = styled.Text`
    font-size: ${props => props.header ? "40px" : "20px"};
    margin: 5px;
    text-align: center;
    color: ${props => props.textColor};

`
const List = ({products, deleteProduct}) => {
    const renderItem = ({item}) => {
       return (
            <StyledPressable onLongPress={() => deleteProduct(item)} style={({pressed})=> [
          {
            backgroundColor: pressed
              ? 'rgba(167, 131, 235, 0.918)'
              : '#8554d3d4'
          }
        ]}>
            <StyledText textColor="black">{item.name}</StyledText>
            </StyledPressable>
       )
    }
    return (
        <StyledSafeAreaView>
            <StyledText textColor="black" header={true}>List of products: </StyledText>
            <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            />
        </StyledSafeAreaView>
    )
}

export default List