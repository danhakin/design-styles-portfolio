import styled from 'styled-components';
import BaseModal from '../../../../components/common/Modal';
import { flatDesignTheme as theme } from '../../theme';

const StyledModal = styled(BaseModal)`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(44, 62, 80, 0.7);
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
    box-shadow: none; /* NO shadows */
    border: ${theme.borderWidth.thick} solid ${theme.colors.primary.main};
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacing[6]};
    border-bottom: ${theme.borderWidth.default} solid ${theme.colors.border};
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0 0;
  }

  .modal-title {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.white};
    margin: 0;
  }

  .modal-close {
    background: ${theme.colors.white};
    border: none;
    font-size: ${theme.typography.fontSize.xl};
    color: ${theme.colors.primary.main};
    cursor: pointer;
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.borderRadius.full};
    transition: all ${theme.transitions.base};
    font-weight: ${theme.typography.fontWeight.bold};

    &:hover {
      background-color: ${theme.colors.gray[100]};
      transform: scale(1.1);
    }

    &:focus {
      outline: 2px solid ${theme.colors.white};
      outline-offset: 2px;
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
    border-top: ${theme.borderWidth.default} solid ${theme.colors.border};
    display: flex;
    justify-content: flex-end;
    gap: ${theme.spacing[3]};
    background-color: ${theme.colors.gray[50]};
    border-radius: 0 0 ${theme.borderRadius.lg} ${theme.borderRadius.lg};
  }
`;

export default StyledModal;
