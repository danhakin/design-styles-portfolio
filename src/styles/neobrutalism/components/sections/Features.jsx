import styled from 'styled-components';
import BaseFeatures from '../../../../components/sections/Features';
import { neobrutalismTheme as theme } from '../../theme';

const StyledFeatures = styled(BaseFeatures)`
  max-width: ${theme.layout.maxWidth};
  margin: ${theme.spacing[16]} auto;
  padding: ${theme.spacing[12]} ${theme.spacing[8]};

  .features-header {
    text-align: center;
    margin-bottom: ${theme.spacing[12]};
  }

  h2 {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['4xl']};
    font-weight: ${theme.typography.fontWeight.black};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacing[5]};
    text-transform: uppercase;
    letter-spacing: ${theme.typography.letterSpacing.wide};
    position: relative;
    display: inline-block;

    /* Brutal underline */
    &::after {
      content: '';
      position: absolute;
      bottom: -${theme.spacing[2]};
      left: 0;
      right: 0;
      height: ${theme.borderWidth.thick};
      background-color: ${theme.colors.secondary.main};
      box-shadow: 0 ${theme.borderWidth.default} 0 ${theme.colors.border};
    }
  }

  .features-subtitle {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.medium};
    color: ${theme.colors.text.secondary};
    max-width: 700px;
    margin: ${theme.spacing[6]} auto 0;
    line-height: ${theme.typography.lineHeight.relaxed};
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${theme.spacing[8]};
  }

  .feature-item {
    background-color: ${theme.colors.white};
    border: ${theme.borderWidth.default} solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.md};
    padding: ${theme.spacing[8]};
    box-shadow: ${theme.shadows.md};
    transition: all ${theme.transitions.base};
    position: relative;

    /* Alternating rotation for visual interest */
    &:nth-child(odd) {
      transform: rotate(-1deg);
    }

    &:nth-child(even) {
      transform: rotate(1deg);
    }

    &:hover {
      transform: rotate(0deg) translate(-2px, -2px);
      box-shadow: ${theme.shadows.lg};
    }

    &:active {
      transform: rotate(0deg) translate(6px, 6px);
      box-shadow: none;
    }
  }

  .feature-icon {
    width: 64px;
    height: 64px;
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    border: ${theme.borderWidth.default} solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.sm};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.black};
    margin-bottom: ${theme.spacing[5]};
    box-shadow: ${theme.shadows.DEFAULT};

    /* Different colors for each feature */
    .feature-item:nth-child(1) & {
      background-color: ${theme.colors.accent.red};
      box-shadow: ${theme.shadows.red};
    }

    .feature-item:nth-child(2) & {
      background-color: ${theme.colors.accent.blue};
      box-shadow: ${theme.shadows.blue};
    }

    .feature-item:nth-child(3) & {
      background-color: ${theme.colors.secondary.main};
      color: ${theme.colors.black};
      box-shadow: ${theme.shadows.yellow};
    }

    .feature-item:nth-child(4) & {
      background-color: ${theme.colors.accent.green};
      box-shadow: ${theme.shadows.green};
    }
  }

  .feature-title {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.black};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacing[3]};
    text-transform: uppercase;
    letter-spacing: ${theme.typography.letterSpacing.wide};
  }

  .feature-description {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    color: ${theme.colors.text.secondary};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin: 0;
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[8]} ${theme.spacing[4]};
    margin: ${theme.spacing[10]} auto;

    h2 {
      font-size: ${theme.typography.fontSize['2xl']};
    }

    .features-subtitle {
      font-size: ${theme.typography.fontSize.base};
    }

    .features-grid {
      grid-template-columns: 1fr;
      gap: ${theme.spacing[6]};
    }

    .feature-item {
      /* Remove rotation on mobile for better readability */
      &:nth-child(odd),
      &:nth-child(even) {
        transform: rotate(0deg);
      }

      &:hover {
        transform: translate(-2px, -2px);
      }
    }
  }
`;

export default StyledFeatures;
