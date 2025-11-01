import styled from 'styled-components';
import BaseHeader from '../../../../layouts/Header';
import { flatDesignTheme as theme } from '../../theme';

const StyledHeader = styled(BaseHeader)`
  background-color: ${theme.colors.primary.main};
  border-bottom: none;
  padding: ${theme.spacing[5]} ${theme.spacing[8]};
  box-shadow: none;

  .header-container {
    max-width: ${theme.layout.maxWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacing[8]};
  }

  .logo {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.extrabold};
    color: ${theme.colors.white};
    text-decoration: none;
    letter-spacing: ${theme.typography.letterSpacing.tight};
  }

  .main-nav {
    display: flex;
    gap: ${theme.spacing[6]};
    align-items: center;
  }

  .nav-link {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.white};
    text-decoration: none;
    transition: all ${theme.transitions.base};
    padding: ${theme.spacing[2]} ${theme.spacing[3]};
    border-radius: ${theme.borderRadius.md};

    &:hover {
      background-color: ${theme.colors.primary.light};
    }

    &:active {
      background-color: ${theme.colors.primary.dark};
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
      gap: ${theme.spacing[3]};
      align-items: flex-start;
      width: 100%;
    }
  }
`;

export default StyledHeader;
