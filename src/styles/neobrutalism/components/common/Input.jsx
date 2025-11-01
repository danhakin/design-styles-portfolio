import styled, { css } from 'styled-components';
import BaseInput from '../../../../components/common/Input';
import { neobrutalismTheme as theme } from '../../theme';

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
  width: 100%;
`;

const StyledLabel = styled.label`
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.wide};
`;

const StyledInput = styled(BaseInput)`
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.base};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  background-color: ${theme.colors.surface};
  color: ${theme.colors.text.primary};
  border: ${theme.borderWidth.default} solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  outline: none;
  transition: all ${theme.transitions.fast};
  box-shadow: ${theme.shadows.sm};
  width: 100%;

  /* Placeholder */
  &::placeholder {
    color: ${theme.colors.text.disabled};
    font-weight: ${theme.typography.fontWeight.normal};
  }

  /* Focus state - brutal blue outline */
  &:focus {
    border-color: ${theme.colors.focus};
    box-shadow: ${theme.shadows.blue};
    transform: translate(-1px, -1px);
  }

  /* Hover state */
  &:hover:not(:disabled):not(:focus) {
    border-color: ${theme.colors.gray[700]};
  }

  /* Disabled state */
  &:disabled {
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.text.disabled};
    border-color: ${theme.colors.gray[300]};
    cursor: not-allowed;
    box-shadow: 2px 2px 0px ${theme.colors.gray[300]};
  }

  /* Error state */
  ${props => props.error && css`
    border-color: ${theme.colors.error};
    box-shadow: ${theme.shadows.red};

    &:focus {
      border-color: ${theme.colors.error};
      box-shadow: 4px 4px 0px ${theme.colors.error};
    }
  `}

  /* Success state */
  ${props => props.success && css`
    border-color: ${theme.colors.success};
    box-shadow: ${theme.shadows.green};

    &:focus {
      border-color: ${theme.colors.success};
      box-shadow: 4px 4px 0px ${theme.colors.success};
    }
  `}
`;

const StyledHelperText = styled.span`
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.text.secondary};

  ${props => props.error && css`
    color: ${theme.colors.error};
    font-weight: ${theme.typography.fontWeight.bold};
  `}

  ${props => props.success && css`
    color: ${theme.colors.success};
    font-weight: ${theme.typography.fontWeight.bold};
  `}
`;

// Wrapper component that handles label and helper text
const Input = ({ label, helperText, error, success, ...props }) => {
  return (
    <StyledInputWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput error={error} success={success} {...props} />
      {helperText && (
        <StyledHelperText error={error} success={success}>
          {helperText}
        </StyledHelperText>
      )}
    </StyledInputWrapper>
  );
};

export default Input;
