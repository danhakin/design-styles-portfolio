import styled, { css } from 'styled-components';
import BaseButton from '../../../../components/common/Button';
import { neobrutalismTheme as theme } from '../../theme';

const StyledButton = styled(BaseButton)`
  font-family: ${theme.typography.fontFamily.primary};
  font-weight: ${theme.typography.fontWeight.bold};
  border: ${theme.borderWidth.default} solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.fast};
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.wide};
  position: relative;

  /* Brutal shadow effect */
  box-shadow: ${theme.shadows.DEFAULT};

  /* Size variants */
  ${props => props.size === 'small' && css`
    padding: ${theme.spacing[2]} ${theme.spacing[5]};
    font-size: ${theme.typography.fontSize.sm};
  `}

  ${props => props.size === 'medium' && css`
    padding: ${theme.spacing[3]} ${theme.spacing[6]};
    font-size: ${theme.typography.fontSize.base};
  `}

  ${props => props.size === 'large' && css`
    padding: ${theme.spacing[4]} ${theme.spacing[8]};
    font-size: ${theme.typography.fontSize.lg};
  `}

  /* Variant styles - bold colors with brutal shadows */
  ${props => props.variant === 'primary' && css`
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.primary.contrast};
    border-color: ${theme.colors.border};

    &:hover:not(:disabled) {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0px ${theme.colors.border};
    }

    &:active:not(:disabled) {
      transform: translate(4px, 4px);
      box-shadow: none;
    }
  `}

  ${props => props.variant === 'secondary' && css`
    background-color: ${theme.colors.secondary.main};
    color: ${theme.colors.secondary.contrast};
    border-color: ${theme.colors.border};
    box-shadow: ${theme.shadows.yellow};

    &:hover:not(:disabled) {
      transform: translate(2px, 2px);
      box-shadow: 4px 4px 0px ${theme.colors.secondary.main};
    }

    &:active:not(:disabled) {
      transform: translate(6px, 6px);
      box-shadow: none;
    }
  `}

  ${props => props.variant === 'tertiary' && css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.text.primary};
    border-color: ${theme.colors.border};

    &:hover:not(:disabled) {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0px ${theme.colors.border};
      background-color: ${theme.colors.gray[100]};
    }

    &:active:not(:disabled) {
      transform: translate(4px, 4px);
      box-shadow: none;
    }
  `}

  ${props => props.variant === 'text' && css`
    background-color: transparent;
    color: ${theme.colors.primary.main};
    border-color: transparent;
    box-shadow: none;

    &:hover:not(:disabled) {
      background-color: ${theme.colors.gray[100]};
      border-color: ${theme.colors.border};
      box-shadow: ${theme.shadows.sm};
    }

    &:active:not(:disabled) {
      transform: translate(2px, 2px);
      box-shadow: none;
    }
  `}

  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
    background-color: ${theme.colors.disabled};
    color: ${theme.colors.text.disabled};
    border-color: ${theme.colors.gray[400]};
    box-shadow: 2px 2px 0px ${theme.colors.gray[400]};
    transform: none;
  }

  /* Loading state */
  ${props => props.loading && css`
    position: relative;
    color: transparent;
    pointer-events: none;

    &::after {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      top: 50%;
      left: 50%;
      margin-left: -9px;
      margin-top: -9px;
      border: 3px solid ${theme.colors.white};
      border-top-color: transparent;
      border-radius: 0;
      animation: button-loading-spinner 0.8s linear infinite;
    }

    @keyframes button-loading-spinner {
      from {
        transform: rotate(0turn);
      }
      to {
        transform: rotate(1turn);
      }
    }
  `}

  /* Full width */
  ${props => props.fullWidth && css`
    width: 100%;
  `}
`;

export default StyledButton;
