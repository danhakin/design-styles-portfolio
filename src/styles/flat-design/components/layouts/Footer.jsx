import styled from 'styled-components';
import BaseFooter from '../../../../layouts/Footer';
import { flatDesignTheme as theme } from '../../theme';

const StyledFooter = styled(BaseFooter)`
  background-color: ${theme.colors.gray[900]};
  border-top: ${theme.borderWidth.thick} solid ${theme.colors.primary.main};
  padding: ${theme.spacing[12]} ${theme.spacing[6]} ${theme.spacing[8]};
  margin-top: ${theme.spacing[16]};

  .footer-container {
    max-width: ${theme.layout.maxWidth};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${theme.spacing[10]};
  }

  .footer-section {
    text-align: left;
  }

  .footer-heading {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.white};
    text-transform: uppercase;
    letter-spacing: ${theme.typography.letterSpacing.wide};
    margin-bottom: ${theme.spacing[4]};
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-links li {
    margin-bottom: ${theme.spacing[2]};
  }

  .footer-links a {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.gray[300]};
    text-decoration: none;
    transition: color ${theme.transitions.base};

    &:hover {
      color: ${theme.colors.primary.light};
    }
  }

  .footer-logo,
  .footer-tagline {
    color: ${theme.colors.white};
  }

  .footer-logo {
    font-family: ${theme.typography.fontFamily.heading};
    font-weight: ${theme.typography.fontWeight.extrabold};
    font-size: ${theme.typography.fontSize.xl};
    margin-bottom: ${theme.spacing[2]};
  }

  .footer-bottom {
    text-align: center;
    padding-top: ${theme.spacing[8]};
    margin-top: ${theme.spacing[10]};
    border-top: ${theme.borderWidth.default} solid ${theme.colors.gray[700]};
    color: ${theme.colors.gray[400]};
    font-size: ${theme.typography.fontSize.sm};
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[10]} ${theme.spacing[4]} ${theme.spacing[6]};

    .footer-container {
      grid-template-columns: 1fr;
      gap: ${theme.spacing[8]};
    }
  }
`;

export default StyledFooter;
