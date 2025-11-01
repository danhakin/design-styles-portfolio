import styled from 'styled-components';
import BaseHeader from '../../../../layouts/Header';
import { minimalismTheme as theme } from '../../theme';

const StyledHeader = styled(BaseHeader)`
  background-color: ${theme.colors.white};
  border-bottom: ${theme.borderWidth.thin} solid ${theme.colors.border};
  padding: ${theme.spacing[4]} ${theme.spacing[6]};

  .header-container {
    max-width: ${theme.layout.maxWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacing[8]};
  }

  .logo {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.primary};
    text-decoration: none;
    letter-spacing: ${theme.typography.letterSpacing.tight};
  }

  .main-nav {
    display: flex;
    gap: ${theme.spacing[8]};
    align-items: center;
  }

  .nav-link {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.medium};
    color: ${theme.colors.text.secondary};
    text-decoration: none;
    transition: color ${theme.transitions.base};
    padding: ${theme.spacing[2]} 0;
    position: relative;

    &:hover {
      color: ${theme.colors.text.primary};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: ${theme.colors.black};
      transform: scaleX(0);
      transition: transform ${theme.transitions.base};
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  .header-actions {
    display: flex;
    gap: ${theme.spacing[3]};
    align-items: center;
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[4]};

    .header-container {
      flex-direction: column;
      align-items: flex-start;
      gap: ${theme.spacing[4]};
    }

    .main-nav {
      flex-direction: column;
      gap: ${theme.spacing[4]};
      align-items: flex-start;
    }
  }
`;

export default StyledHeader;
