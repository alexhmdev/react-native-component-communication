import React from 'react';
import styled from 'styled-components/native';


const ButtonContainer = styled.TouchableOpacity`
  width: auto;
  height: auto;
  padding: 12px;
  border-radius: 10px;
  background-color: ${props => props.bgColor};
`;
const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`;
const AddButton = ({ onPress, bgColor, title }) => (
  <ButtonContainer onPress={onPress} bgColor={bgColor}>
    <ButtonText>{title}</ButtonText>
  </ButtonContainer>
);
export default AddButton;
