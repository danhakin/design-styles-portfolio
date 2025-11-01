import styled from 'styled-components';
import BaseCardGrid from '../../../../components/sections/CardGrid';
import Card from '../common/Card';
import Button from '../common/Button';
import { neobrutalismTheme as theme } from '../../theme';

// Create a wrapper component that passes styled components as props
const CardGridWithStyledComponents = (props) => (
  <BaseCardGrid {...props} Card={Card} Button={Button} />
);

const StyledCardGrid = styled(CardGridWithStyledComponents)`
  max-width: ${theme.layout.maxWidth};
  margin: ${theme.spacing[16]} auto;
  padding: ${theme.spacing[12]} ${theme.spacing[8]};
  background-color: ${theme.colors.secondary.main};
  border: ${theme.borderWidth.brutal} solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.brutal};
  transform: rotate(0.5deg);
  position: relative;

  /* Add brutal pattern overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 20px,
        rgba(0, 0, 0, 0.03) 20px,
        rgba(0, 0, 0, 0.03) 21px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 20px,
        rgba(0, 0, 0, 0.03) 20px,
        rgba(0, 0, 0, 0.03) 21px
      );
    pointer-events: none;
    border-radius: ${theme.borderRadius.md};
  }

  .card-grid-container {
    position: relative;
    z-index: 1;
  }

  .section-heading {
    text-align: center;
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['4xl']};
    font-weight: ${theme.typography.fontWeight.black};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacing[10]};
    text-transform: uppercase;
    letter-spacing: ${theme.typography.letterSpacing.wide};
    text-shadow: 3px 3px 0 ${theme.colors.white};
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacing[8]};
    position: relative;
    z-index: 1;
  }

  /* Override Card styles for this section */
  ${Card} {
    background-color: ${theme.colors.white};
    border: ${theme.borderWidth.default} solid ${theme.colors.border};
    box-shadow: ${theme.shadows.md};

    /* Different background colors for visual interest */
    &:nth-child(3n + 1) {
      background-color: ${theme.colors.accent.cyan};
      transform: rotate(-2deg);
    }

    &:nth-child(3n + 2) {
      background-color: ${theme.colors.accent.pink};
      transform: rotate(1deg);
    }

    &:nth-child(3n + 3) {
      background-color: ${theme.colors.white};
      transform: rotate(-1deg);
    }

    &:hover {
      transform: rotate(0deg) translate(-2px, -2px);
      box-shadow: ${theme.shadows.lg};
    }
  }

  .card-tag {
    display: inline-block;
    padding: ${theme.spacing[1]} ${theme.spacing[3]};
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.xs};
    font-weight: ${theme.typography.fontWeight.bold};
    text-transform: uppercase;
    letter-spacing: ${theme.typography.letterSpacing.wide};
    border: ${theme.borderWidth.thin} solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.sm};
    margin-bottom: ${theme.spacing[3]};
    box-shadow: ${theme.shadows.sm};
  }

  .card-title {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.black};
    color: ${theme.colors.black};
    margin-bottom: ${theme.spacing[3]};
    text-transform: uppercase;
    letter-spacing: ${theme.typography.letterSpacing.wide};
  }

  .card-description {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.sm};
    font-weight: ${theme.typography.fontWeight.medium};
    color: ${theme.colors.black};
    line-height: ${theme.typography.lineHeight.relaxed};
    margin-bottom: ${theme.spacing[5]};
  }

  .card-image-placeholder {
    background-color: ${theme.colors.gray[200]};
    border: ${theme.borderWidth.default} solid ${theme.colors.border};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.typography.fontFamily.primary};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.text.secondary};
    text-transform: uppercase;
    font-size: ${theme.typography.fontSize.sm};
    margin-bottom: ${theme.spacing[4]};
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[8]} ${theme.spacing[4]};
    margin: ${theme.spacing[10]} auto;
    transform: rotate(0deg);

    .section-heading {
      font-size: ${theme.typography.fontSize['2xl']};
      text-shadow: 2px 2px 0 ${theme.colors.white};
    }

    .card-grid {
      grid-template-columns: 1fr;
      gap: ${theme.spacing[6]};
    }

    ${Card} {
      &:nth-child(3n + 1),
      &:nth-child(3n + 2),
      &:nth-child(3n + 3) {
        transform: rotate(0deg);
      }

      &:hover {
        transform: translate(-2px, -2px);
      }
    }
  }
`;

export default StyledCardGrid;
