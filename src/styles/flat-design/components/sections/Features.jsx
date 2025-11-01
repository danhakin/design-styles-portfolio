import styled from 'styled-components';
import BaseFeatures from '../../../../components/sections/Features';
import { flatDesignTheme as theme } from '../../theme';

const StyledFeatures = styled(BaseFeatures)`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${theme.spacing[20]} ${theme.spacing[8]};

  .section-heading {
    text-align: center;
    margin-bottom: ${theme.spacing[12]};
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['4xl']};
    font-weight: ${theme.typography.fontWeight.extrabold};
    color: ${theme.colors.text.primary};
    line-height: ${theme.typography.lineHeight.tight};
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${theme.spacing[8]};
  }

  .feature-item {
    text-align: center;
    padding: ${theme.spacing[8]};
    background-color: ${theme.colors.white};
    border: ${theme.borderWidth.default} solid ${theme.colors.gray[200]};
    border-radius: ${theme.borderRadius.lg};
    transition: all ${theme.transitions.base};

    &:hover {
      transform: translateY(-4px);
      border-color: ${theme.colors.primary.main};
    }

    &:nth-child(1) {
      background-color: ${theme.colors.accent.turquoise};
      color: ${theme.colors.white};
      border-color: ${theme.colors.accent.turquoise};
    }

    &:nth-child(2) {
      background-color: ${theme.colors.accent.purple};
      color: ${theme.colors.white};
      border-color: ${theme.colors.accent.purple};
    }

    &:nth-child(3) {
      background-color: ${theme.colors.accent.orange};
      color: ${theme.colors.white};
      border-color: ${theme.colors.accent.orange};
    }

    &:nth-child(4) {
      background-color: ${theme.colors.accent.pink};
      color: ${theme.colors.white};
      border-color: ${theme.colors.accent.pink};
    }
  }

  .feature-icon {
    font-size: ${theme.typography.fontSize['5xl']};
    margin-bottom: ${theme.spacing[4]};
  }

  .feature-title {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.bold};
    margin-bottom: ${theme.spacing[3]};
  }

  .feature-description {
    font-size: ${theme.typography.fontSize.base};
    line-height: ${theme.typography.lineHeight.relaxed};
    opacity: 0.95;
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[10]} ${theme.spacing[4]};

    .features-grid {
      grid-template-columns: 1fr;
      gap: ${theme.spacing[6]};
    }

    .section-heading {
      font-size: ${theme.typography.fontSize['3xl']};
    }
  }
`;

export default StyledFeatures;
