import styled from 'styled-components';
import BaseFooter from '../../../../layouts/Footer';
import { minimalismTheme as theme } from '../../theme';

const StyledFooter = styled(BaseFooter)`
  background-color: ${theme.colors.surface};
  border-top: ${theme.borderWidth.thin} solid ${theme.colors.border};
  padding: ${theme.spacing[16]} ${theme.spacing[6]} ${theme.spacing[8]};
  margin-top: ${theme.spacing[20]};

  .footer-container {
    max-width: ${theme.layout.maxWidth};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${theme.spacing[12]};
  }

  .footer-section {
    text-align: left;
  }

  .footer-heading {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.primary};
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
    margin-bottom: ${theme.spacing[3]};
  }

  .footer-links a {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.text.secondary};
    text-decoration: none;
    transition: color ${theme.transitions.base};

    &:hover {
      color: ${theme.colors.text.primary};
    }
  }

  .footer-bottom {
    text-align: center;
    padding-top: ${theme.spacing[8]};
    margin-top: ${theme.spacing[12]};
    border-top: ${theme.borderWidth.thin} solid ${theme.colors.border};
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.sm};
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[12]} ${theme.spacing[4]} ${theme.spacing[6]};

    .footer-container {
      grid-template-columns: 1fr;
      gap: ${theme.spacing[8]};
    }
  }
`;

export default StyledFooter;
