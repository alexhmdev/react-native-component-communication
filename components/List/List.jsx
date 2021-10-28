import React from "react"
import styled from "styled-components/native"
import { FlatList } from "react-native"

const StyledSafeAreaView = styled.SafeAreaView`
    
    width: 100%;
    align-self: center;
`
const StyledView = styled.View`
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
const List = ({products}) => {
    console.log('Productos lista',products);
    const renderItem = ({item}) => {
       return (
            <StyledView>
            <StyledText textColor="black">{item.name}</StyledText>
            </StyledView>
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