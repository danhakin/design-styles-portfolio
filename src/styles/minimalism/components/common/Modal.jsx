import styled from 'styled-components';
import BaseModal from '../../../../components/common/Modal';
import { minimalismTheme as theme } from '../../theme';

const StyledModal = styled(BaseModal)`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${theme.zIndex.modal};
    padding: ${theme.spacing[4]};
  }

  .modal-content {
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.lg};
    max-width: 500px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: ${theme.shadows.DEFAULT};
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacing[6]};
    border-bottom: ${theme.borderWidth.thin} solid ${theme.colors.border};
  }

  .modal-title {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.primary};
    margin: 0;
  }

  .modal-close {
    background: none;
    border: none;
    font-size: ${theme.typography.fontSize['2xl']};
    color: ${theme.colors.text.secondary};
    cursor: pointer;
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius.md};
    transition: all ${theme.transitions.base};

    &:hover {
      background-color: ${theme.colors.gray[100]};
      color: ${theme.colors.text.primary};
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${theme.colors.gray[200]};
    }
  }

  .modal-body {
    padding: ${theme.spacing[6]};
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.base};
    line-height: ${theme.typography.lineHeight.relaxed};
  }

  .modal-footer {
    padding: ${theme.spacing[6]};
    border-top: ${theme.borderWidth.thin} solid ${theme.colors.border};
    display: flex;
    justify-content: flex-end;
    gap: ${theme.spacing[3]};
  }
`;

export default StyledModal;
