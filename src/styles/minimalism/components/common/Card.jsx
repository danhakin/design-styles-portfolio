import styled from 'styled-components';
import BaseCard from '../../../../components/common/Card';
import { minimalismTheme as theme } from '../../theme';

const StyledCard = styled(BaseCard)`
  background-color: ${theme.colors.white};
  border: ${theme.borderWidth.thin} solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing[6]};
  transition: all ${theme.transitions.base};

  /* Minimal hover effect */
  &:hover {
    border-color: ${theme.colors.gray[300]};
  }

  .card-image {
    width: 100%;
    height: auto;
    border-radius: ${theme.borderRadius.md};
    margin-bottom: ${theme.spacing[4]};
  }

  .card-title {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing[3]};
    line-height: ${theme.typography.lineHeight.tight};
  }

  .card-content {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.typography.fontSize.base};
    line-height: ${theme.typography.lineHeight.relaxed};
  }
`;

export default StyledCard;
