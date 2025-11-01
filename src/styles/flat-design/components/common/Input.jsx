import styled from 'styled-components';
import BaseInput from '../../../../components/common/Input';
import { flatDesignTheme as theme } from '../../theme';

const StyledInput = styled(BaseInput)`
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[2]};
  }

  .input-label {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.primary};
  }

  input, textarea {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    padding: ${theme.spacing[3]};
    border: ${theme.borderWidth.default} solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
    background-color: ${theme.colors.white};
    color: ${theme.colors.text.primary};
    transition: all ${theme.transitions.base};
    outline: none;
    box-shadow: none;

    &::placeholder {
      color: ${theme.colors.text.disabled};
    }

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

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  .input-error {
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.error};
    margin-top: ${theme.spacing[1]};
  }

  /* Error state */
  &.has-error input,
  &.has-error textarea {
    border-color: ${theme.colors.error};

    &:focus {
      border-color: ${theme.colors.error};
    }
  }
`;

export default StyledInput;
