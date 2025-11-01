import styled, { css } from 'styled-components';
import BaseButton from '../../../../components/common/Button';
import { minimalismTheme as theme } from '../../theme';

const StyledButton = styled(BaseButton)`
  font-family: ${theme.typography.fontFamily.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  border: ${theme.borderWidth.thin} solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transitions.base};
  cursor: pointer;
  outline: none;

  /* Size variants */
  ${props => props.size === 'small' && css`
    padding: ${theme.spacing[2]} ${theme.spacing[4]};
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

  /* Variant styles */
  ${props => props.variant === 'primary' && css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    border-color: ${theme.colors.black};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.gray[800]};
      border-color: ${theme.colors.gray[800]};
    }

    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.gray[200]};
    }

    &:active:not(:disabled) {
      background-color: ${theme.colors.gray[900]};
      border-color: ${theme.colors.gray[900]};
    }
  `}

  ${props => props.variant === 'secondary' && css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    border-color: ${theme.colors.black};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.gray[50]};
    }

    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.gray[200]};
    }

    &:active:not(:disabled) {
      background-color: ${theme.colors.gray[100]};
    }
  `}

  ${props => props.variant === 'tertiary' && css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray[700]};
    border-color: ${theme.colors.border};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.gray[50]};
      border-color: ${theme.colors.gray[300]};
    }

    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.gray[200]};
    }

    &:active:not(:disabled) {
      background-color: ${theme.colors.gray[100]};
    }
  `}

  ${props => props.variant === 'text' && css`
    background-color: transparent;
    color: ${theme.colors.black};
    border-color: transparent;

    &:hover:not(:disabled) {
      background-color: ${theme.colors.gray[50]};
    }

    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.gray[200]};
    }

    &:active:not(:disabled) {
      background-color: ${theme.colors.gray[100]};
    }
  `}

  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${theme.colors.disabled};
    color: ${theme.colors.text.disabled};
    border-color: ${theme.colors.border};
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
      border: 2px solid transparent;
      border-top-color: currentColor;
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
