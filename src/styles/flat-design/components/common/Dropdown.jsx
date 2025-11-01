import styled from 'styled-components';
import BaseDropdown from '../../../../components/common/Dropdown';
import { flatDesignTheme as theme } from '../../theme';

const StyledDropdown = styled(BaseDropdown)`
  .dropdown-wrapper {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[2]};
  }

  .dropdown-label {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.primary};
  }

  select {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    padding: ${theme.spacing[3]};
    border: ${theme.borderWidth.default} solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
    background-color: ${theme.colors.white};
    color: ${theme.colors.text.primary};
    transition: all ${theme.transitions.base};
    outline: none;
    cursor: pointer;
    appearance: none;
    box-shadow: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%233498DB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right ${theme.spacing[3]} center;
    background-size: 20px;
    padding-right: ${theme.spacing[10]};

    &:hover:not(:disabled) {
      border-color: ${theme.colors.primary.light};
    }

    &:focus {
      border-color: ${theme.colors.primary.main};
      border-width: ${theme.borderWidth.default};
    }

    &:disabled {
      background-color: ${theme.colors.gray[100]};
      color: ${theme.colors.text.disabled};
      cursor: not-allowed;
    }
  }

  .dropdown-error {
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.error};
    margin-top: ${theme.spacing[1]};
  }

  /* Error state */
  &.has-error select {
    border-color: ${theme.colors.error};

    &:focus {
      border-color: ${theme.colors.error};
    }
  }
`;

export default StyledDropdown;
