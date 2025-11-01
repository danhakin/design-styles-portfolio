import styled from 'styled-components';
import BaseCard from '../../../../components/common/Card';
import { neobrutalismTheme as theme } from '../../theme';

const StyledCard = styled(BaseCard)`
  background-color: ${theme.colors.surface};
  border: ${theme.borderWidth.default} solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing[6]};
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.base};
  position: relative;

  /* Hover effect - reduce shadow offset */
  &:hover {
    transform: translate(2px, 2px);
    box-shadow: ${theme.shadows.DEFAULT};
  }

  /* Active/pressed state */
  &:active {
    transform: translate(6px, 6px);
    box-shadow: none;
  }

  /* Add visual weight */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: transparent;
    border: 1px solid ${theme.colors.gray[200]};
    border-radius: ${theme.borderRadius.md};
    z-index: -1;
    pointer-events: none;
  }

  h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.heading};
    font-weight: ${theme.typography.fontWeight.black};
    color: ${theme.colors.text.primary};
    margin-bottom: ${theme.spacing[3]};
    text-transform: uppercase;
    letter-spacing: ${theme.typography.letterSpacing.wide};
  }

  p {
    font-family: ${theme.typography.fontFamily.primary};
    color: ${theme.colors.text.secondary};
    line-height: ${theme.typography.lineHeight.normal};
    margin-bottom: ${theme.spacing[4]};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default StyledCard;
