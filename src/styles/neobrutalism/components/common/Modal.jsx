import styled, { css } from 'styled-components';
import BaseModal from '../../../../components/common/Modal';
import { neobrutalismTheme as theme } from '../../theme';

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8); /* Harsh, dark overlay */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${theme.zIndex.modalBackdrop};
  padding: ${theme.spacing[4]};

  ${props => !props.isOpen && css`
    display: none;
  `}
`;

const StyledModalContent = styled.div`
  background-color: ${theme.colors.surface};
  border: ${theme.borderWidth.thick} solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.brutal};
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  z-index: ${theme.zIndex.modal};

  /* Brutal animation */
  animation: modal-appear ${theme.transitions.base} linear;

  @keyframes modal-appear {
    from {
      transform: translate(-20px, -20px);
      opacity: 0;
    }
    to {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;

const StyledModalHeader = styled.div`
  padding: ${theme.spacing[6]};
  border-bottom: ${theme.borderWidth.default} solid ${theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.secondary.main};

  h2, h3 {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.black};
    color: ${theme.colors.text.primary};
    margin: 0;
    text-transform: uppercase;
    letter-spacing: ${theme.typography.letterSpacing.wide};
  }
`;

const StyledCloseButton = styled.button`
  background: ${theme.colors.black};
  color: ${theme.colors.white};
  border: ${theme.borderWidth.default} solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.sm};
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.black};
  line-height: 1;
  transition: all ${theme.transitions.fast};
  box-shadow: ${theme.shadows.sm};
  padding: 0;

  &:hover {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0px ${theme.colors.border};
    background-color: ${theme.colors.error};
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: none;
  }
`;

const StyledModalBody = styled.div`
  padding: ${theme.spacing[6]};
  font-family: ${theme.typography.fontFamily.primary};
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeight.normal};

  p {
    margin-bottom: ${theme.spacing[4]};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const StyledModalFooter = styled.div`
  padding: ${theme.spacing[6]};
  border-top: ${theme.borderWidth.default} solid ${theme.colors.border};
  display: flex;
  gap: ${theme.spacing[4]};
  justify-content: flex-end;
  background-color: ${theme.colors.gray[50]};
`;

// Wrapper component
const Modal = ({ isOpen, onClose, title, children, footer, ...props }) => {
  return (
    <StyledModalOverlay isOpen={isOpen} onClick={onClose}>
      <StyledModalContent onClick={(e) => e.stopPropagation()} {...props}>
        {title && (
          <StyledModalHeader>
            <h2>{title}</h2>
            <StyledCloseButton onClick={onClose} aria-label="Close modal">
              ×
            </StyledCloseButton>
          </StyledModalHeader>
        )}
        <StyledModalBody>{children}</StyledModalBody>
        {footer && <StyledModalFooter>{footer}</StyledModalFooter>}
      </StyledModalContent>
    </StyledModalOverlay>
  );
};

export default Modal;
