import React from "react"
import styled from "styled-components/native"

const CustomInput = styled.TextInput`
    width: 50%;
    border: 3px;
    border-radius: 10px;
    padding: 5px;
    margin: 10px;
    border-color: #686868b8;
    height: auto;
`
export default function ProductInput({onChangeText, refInput}) {
    return (
           <CustomInput onChangeText={onChangeText} ref={refInput}/>
    )
}
