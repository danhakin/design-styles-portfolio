import styled, { css } from 'styled-components';
import BaseButton from '../../../../components/common/Button';
import { flatDesignTheme as theme } from '../../theme';

const StyledButton = styled(BaseButton)`
  font-family: ${theme.typography.fontFamily.primary};
  font-weight: ${theme.typography.fontWeight.semibold};
  border: none;
  border-radius: ${theme.borderRadius.lg};
  transition: all ${theme.transitions.base};
  cursor: pointer;
  outline: none;
  box-shadow: none; /* NO shadows in flat design */

  /* Size variants */
  ${props => props.size === 'small' && css`
    padding: ${theme.spacing[2]} ${theme.spacing[5]};
    font-size: ${theme.typography.fontSize.sm};
  `}

  ${props => props.size === 'medium' && css`
    padding: ${theme.spacing[3]} ${theme.spacing[8]};
    font-size: ${theme.typography.fontSize.base};
  `}

  ${props => props.size === 'large' && css`
    padding: ${theme.spacing[4]} ${theme.spacing[10]};
    font-size: ${theme.typography.fontSize.lg};
  `}

  /* Variant styles - bright colors, no shadows */
  ${props => props.variant === 'primary' && css`
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.primary.contrast};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.primary.light};
    }

    &:active:not(:disabled) {
      background-color: ${theme.colors.primary.dark};
    }
  `}

  ${props => props.variant === 'secondary' && css`
    background-color: ${theme.colors.secondary.main};
    color: ${theme.colors.secondary.contrast};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.secondary.light};
    }

    &:active:not(:disabled) {
      background-color: ${theme.colors.secondary.dark};
    }
  `}

  ${props => props.variant === 'tertiary' && css`
    background-color: ${theme.colors.gray[300]};
    color: ${theme.colors.text.primary};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.gray[400]};
    }

    &:active:not(:disabled) {
      background-color: ${theme.colors.gray[500]};
    }
  `}

  ${props => props.variant === 'text' && css`
    background-color: transparent;
    color: ${theme.colors.primary.main};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.gray[100]};
    }

    &:active:not(:disabled) {
      background-color: ${theme.colors.gray[200]};
    }
  `}

  /* Disabled state */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: ${theme.colors.disabled};
    color: ${theme.colors.text.disabled};
  }

  /* Loading state */
  ${props => props.loading && css`
    position: relative;
    color: transparent;
    pointer-events: none;

    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      top: 50%;
      left: 50%;
      margin-left: -8px;
      margin-top: -8px;
      border: 2px solid ${theme.colors.white};
      border-top-color: transparent;
      border-radius: 50%;
      animation: button-loading-spinner 0.6s linear infinite;
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
