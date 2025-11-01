import styled from 'styled-components';
import BaseHero from '../../../../components/sections/Hero';
import { flatDesignTheme as theme } from '../../theme';

const StyledHero = styled(BaseHero)`
  max-width: ${theme.layout.maxWidth};
  margin: ${theme.spacing[8]} auto 0;
  padding: ${theme.spacing[20]} ${theme.spacing[8]};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing[16]};
  align-items: center;
  background: linear-gradient(135deg, ${theme.colors.primary.main} 0%, ${theme.colors.secondary.main} 100%);
  border-radius: ${theme.borderRadius.xl};
  color: ${theme.colors.white};

  .hero-content {
    max-width: 600px;
  }

  h1 {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['5xl']};
    font-weight: ${theme.typography.fontWeight.extrabold};
    color: ${theme.colors.white};
    line-height: ${theme.typography.lineHeight.tight};
    margin-bottom: ${theme.spacing[6]};
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.lg};
    color: rgba(255, 255, 255, 0.95);
    line-height: ${theme.typography.lineHeight.relaxed};
    margin-bottom: ${theme.spacing[8]};
  }

  .hero-actions {
    display: flex;
    gap: ${theme.spacing[4]};
    flex-wrap: wrap;
  }

  .hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .placeholder-image {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: ${theme.borderRadius.xl};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
    font-weight: ${theme.typography.fontWeight.semibold};
    border: ${theme.borderWidth.thick} solid rgba(255, 255, 255, 0.3);
  }

  /* Responsive */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: ${theme.spacing[10]} ${theme.spacing[4]};
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
