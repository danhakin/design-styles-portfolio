import styled from 'styled-components';
import BaseCardGrid from '../../../../components/sections/CardGrid';
import { flatDesignTheme as theme } from '../../theme';

const StyledCardGrid = styled(BaseCardGrid)`
  background-color: ${theme.colors.gray[50]};
  padding: ${theme.spacing[20]} ${theme.spacing[8]};

  .card-grid-container {
    max-width: ${theme.layout.maxWidth};
    margin: 0 auto;
  }

  .section-heading {
    text-align: center;
    margin-bottom: ${theme.spacing[12]};
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['4xl']};
    font-weight: ${theme.typography.fontWeight.extrabold};
    color: ${theme.colors.text.primary};
    line-height: ${theme.typography.lineHeight.tight};
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${theme.spacing[6]};
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[10]} ${theme.spacing[4]};

    .card-grid {
      grid-template-columns: 1fr;
    }

    .section-heading {
      font-size: ${theme.typography.fontSize['3xl']};
    }
  }
`;

export default StyledCardGrid;
