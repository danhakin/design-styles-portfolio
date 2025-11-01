import styled from 'styled-components';
import BaseCardGrid from '../../../../components/sections/CardGrid';
import { minimalismTheme as theme } from '../../theme';

const StyledCardGrid = styled(BaseCardGrid)`
  background-color: ${theme.colors.surface};
  padding: ${theme.spacing[20]} ${theme.spacing[6]};

  .card-grid-container {
    max-width: ${theme.layout.maxWidth};
    margin: 0 auto;
  }

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

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${theme.spacing[8]};
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[12]} ${theme.spacing[4]};

    .card-grid {
      grid-template-columns: 1fr;
    }

    h2 {
      font-size: ${theme.typography.fontSize['3xl']};
    }
  }
`;

export default StyledCardGrid;
