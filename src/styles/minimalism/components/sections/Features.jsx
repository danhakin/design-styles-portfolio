import styled from 'styled-components';
import BaseFeatures from '../../../../components/sections/Features';
import { minimalismTheme as theme } from '../../theme';

const StyledFeatures = styled(BaseFeatures)`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  padding: ${theme.spacing[20]} ${theme.spacing[6]};

  .section-heading {
    text-align: center;
    margin-bottom: ${theme.spacing[16]};
  }

  h2 {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize['4xl']};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.text.primary};
    line-height: ${theme.typography.lineHeight.tight};
    margin-bottom: ${theme.spacing[4]};
  }

  .section-description {
    font-size: ${theme.typography.fontSize.lg};
    color: ${theme.colors.text.secondary};
    max-width: 600px;
    margin: 0 auto;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${theme.spacing[12]};
  }

  .feature-item {
    text-align: center;
    padding: ${theme.spacing[6]};
  }

  .feature-icon {
    font-size: ${theme.typography.fontSize['5xl']};
    margin-bottom: ${theme.spacing[6]};
    color: ${theme.colors.text.primary};
  }

  .feature-title {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing[3]};
  }

  .feature-description {
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.text.secondary};
    line-height: ${theme.typography.lineHeight.relaxed};
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[12]} ${theme.spacing[4]};

    .features-grid {
      grid-template-columns: 1fr;
      gap: ${theme.spacing[8]};
    }

    h2 {
      font-size: ${theme.typography.fontSize['3xl']};
    }
  }
`;

export default StyledFeatures;
