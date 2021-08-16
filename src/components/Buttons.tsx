import React from 'react'
import styled, { StyledComponentBase } from 'styled-components'
import { BG_COLORS, MAIN_COLORS } from '../colors'

export type ButtonType = 'primary' | 'secondary' | 'danger'

export interface ISFButtonProps {
  type: ButtonType
  text: string
  disabled?: boolean
  action: () => void
}

interface IStyledButtonProps {
  buttonType: ButtonType
}

const StyledButton = styled.button<IStyledButtonProps>`
  border: 1px solid;
  color: ${(props) =>
    props.buttonType === 'primary'
      ? MAIN_COLORS.PRIMARY
      : props.buttonType === 'secondary'
      ? MAIN_COLORS.SECONDARY
      : MAIN_COLORS.DANGER};

  background-color: ${(props) =>
    props.buttonType === 'primary'
      ? BG_COLORS.PRIMARY
      : props.buttonType === 'secondary'
      ? BG_COLORS.SECONDARY
      : BG_COLORS.DANGER};
`

export const SFButton: React.FC<ISFButtonProps> = ({
  type,
  text,
  disabled,
  action,
}) => {
  return (
    <StyledButton
      buttonType={type}
      onClick={() => {
        if (!disabled) action()
      }}
    >
      {text}
    </StyledButton>
  )
}
