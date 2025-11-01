import styled from 'styled-components';
import BaseInput from '../../../../components/common/Input';
import { minimalismTheme as theme } from '../../theme';

const StyledInput = styled(BaseInput)`
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[2]};
  }

  .input-label {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.medium};
    color: ${theme.colors.text.primary};
  }

  input, textarea {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    padding: ${theme.spacing[3]};
    border: ${theme.borderWidth.thin} solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
    background-color: ${theme.colors.white};
    color: ${theme.colors.text.primary};
    transition: all ${theme.transitions.base};
    outline: none;

    &::placeholder {
      color: ${theme.colors.text.disabled};
    }

    &:hover:not(:disabled) {
      border-color: ${theme.colors.gray[300]};
    }

    &:focus {
      border-color: ${theme.colors.black};
      box-shadow: 0 0 0 3px ${theme.colors.gray[200]};
    }

    &:disabled {
      background-color: ${theme.colors.disabled};
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
      box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    }
  }
`;

export default StyledInput;
