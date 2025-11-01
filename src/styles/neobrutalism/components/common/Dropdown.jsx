import styled, { css } from 'styled-components';
import BaseDropdown from '../../../../components/common/Dropdown';
import { neobrutalismTheme as theme } from '../../theme';

const StyledDropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledLabel = styled.label`
  display: block;
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing[2]};
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.wide};
`;

const StyledSelect = styled(BaseDropdown)`
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  padding-right: ${theme.spacing[10]};
  background-color: ${theme.colors.surface};
  color: ${theme.colors.text.primary};
  border: ${theme.borderWidth.default} solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  outline: none;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  box-shadow: ${theme.shadows.sm};
  width: 100%;
  appearance: none;

  /* Custom arrow using background */
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23000000' stroke-width='2' stroke-linecap='square'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right ${theme.spacing[4]} center;

  /* Focus state */
  &:focus {
    border-color: ${theme.colors.focus};
    box-shadow: ${theme.shadows.blue};
    transform: translate(-1px, -1px);
  }

  /* Hover state */
  &:hover:not(:disabled) {
    border-color: ${theme.colors.gray[700]};
  }

  /* Disabled state */
  &:disabled {
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.text.disabled};
    border-color: ${theme.colors.gray[300]};
    cursor: not-allowed;
    box-shadow: 2px 2px 0px ${theme.colors.gray[300]};
    opacity: 1;
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
`;

const StyledHelperText = styled.span`
  display: block;
  margin-top: ${theme.spacing[2]};
  font-family: ${theme.typography.fontFamily.primary};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.text.secondary};

  ${props => props.error && css`
    color: ${theme.colors.error};
    font-weight: ${theme.typography.fontWeight.bold};
  `}
`;

// Wrapper component
const Dropdown = ({ label, helperText, error, ...props }) => {
  return (
    <StyledDropdownWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect error={error} {...props} />
      {helperText && (
        <StyledHelperText error={error}>{helperText}</StyledHelperText>
      )}
    </StyledDropdownWrapper>
  );
};

export default Dropdown;
