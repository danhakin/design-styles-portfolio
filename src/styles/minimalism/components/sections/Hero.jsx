import styled from 'styled-components';
import BaseHero from '../../../../components/sections/Hero';
import { minimalismTheme as theme } from '../../theme';

const StyledHero = styled(BaseHero)`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${theme.spacing[20]} ${theme.spacing[6]};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing[16]};
  align-items: center;

  .hero-content {
    max-width: 600px;
  }

  h1 {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize['5xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.text.primary};
    line-height: ${theme.typography.lineHeight.tight};
    margin-bottom: ${theme.spacing[6]};
    letter-spacing: ${theme.typography.letterSpacing.tight};
  }

  p {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.text.secondary};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin-bottom: ${theme.spacing[8]};
  }

  .hero-actions {
    display: flex;
    gap: ${theme.spacing[4]};
    flex-wrap: wrap;
  }

  .hero-image {
    width: 100%;
    height: auto;
    border-radius: ${theme.borderRadius.lg};
  }

  /* Responsive */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: ${theme.spacing[12]} ${theme.spacing[4]};
    gap: ${theme.spacing[8]};

    h1 {
      font-size: ${theme.typography.fontSize['3xl']};
    }

    p {
      font-size: ${theme.typography.fontSize.base};
    }
  }
`;

export default StyledHero;
