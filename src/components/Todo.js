import React from 'react'
import Button from '@atlaskit/button'
import styled from 'styled-components'

const ButtonStyled = styled(Button)`
    margin-top: 5px;
`;

export default function Todo() {
  return <ButtonStyled shouldFitContainer>Item 1</ButtonStyled>
}
