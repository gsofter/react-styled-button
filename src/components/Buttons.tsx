import React from 'react'
import styled, { StyledComponentBase } from 'styled-components'
import { BG_COLORS, MAIN_COLORS, BORDER_COLORS } from '../colors'

export type ButtonType = 'primary' | 'secondary' | 'danger'

export interface ISFButtonProps {
  type: ButtonType
  text: string
  disabled?: boolean
  action: () => void
}

interface IStyledButtonProps {
  buttonType: ButtonType
  disabled?: boolean
}

const StyledButton = styled.button<IStyledButtonProps>`
  border: 1px solid;
  color: ${(props) =>
    props.disabled
      ? MAIN_COLORS.DISABLED
      : props.buttonType === 'primary'
      ? MAIN_COLORS.PRIMARY
      : props.buttonType === 'secondary'
      ? MAIN_COLORS.SECONDARY
      : MAIN_COLORS.DANGER};

  background-color: ${(props) =>
    props.disabled
      ? BG_COLORS.DISABLED
      : props.buttonType === 'primary'
      ? BG_COLORS.PRIMARY
      : props.buttonType === 'secondary'
      ? BG_COLORS.SECONDARY
      : BG_COLORS.DANGER};

  border-color: ${(props) =>
    props.disabled
      ? BORDER_COLORS.DISABLED
      : props.buttonType === 'primary'
      ? BORDER_COLORS.PRIMARY
      : props.buttonType === 'secondary'
      ? BORDER_COLORS.SECONDARY
      : BORDER_COLORS.DANGER};
  transition-duration: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
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
      disabled={disabled}
    >
      {text}
    </StyledButton>
  )
}
