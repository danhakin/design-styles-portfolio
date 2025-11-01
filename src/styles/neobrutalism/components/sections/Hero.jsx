import styled from 'styled-components';
import BaseHero from '../../../../components/sections/Hero';
import Button from '../common/Button';
import { neobrutalismTheme as theme } from '../../theme';

// Create a wrapper component that passes styled components as props
const HeroWithStyledComponents = (props) => (
  <BaseHero {...props} Button={Button} />
);

const StyledHero = styled(HeroWithStyledComponents)`
  max-width: ${theme.layout.maxWidth};
  margin: ${theme.spacing[8]} auto 0;
  padding: ${theme.spacing[16]} ${theme.spacing[8]};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing[12]};
  align-items: center;
  background: ${theme.colors.white};
  border: ${theme.borderWidth.brutal} solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.md};
  box-shadow: ${theme.shadows.brutal};
  position: relative;
  transform: rotate(-0.5deg);

  /* Add brutal background pattern */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        ${theme.colors.gray[100]} 10px,
        ${theme.colors.gray[100]} 11px
      );
    opacity: 0.3;
    pointer-events: none;
    border-radius: ${theme.borderRadius.md};
  }

  .hero-content {
    max-width: 600px;
    position: relative;
    z-index: 1;
  }

  h1 {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['5xl']};
    font-weight: ${theme.typography.fontWeight.black};
    color: ${theme.colors.black};
    line-height: ${theme.typography.lineHeight.tight};
    margin-bottom: ${theme.spacing[6]};
    text-transform: uppercase;
    letter-spacing: ${theme.typography.letterSpacing.tight};
    text-shadow:
      3px 3px 0 ${theme.colors.secondary.main},
      6px 6px 0 ${theme.colors.black};
    transform: rotate(0.5deg);
  }

  p {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.medium};
    color: ${theme.colors.text.primary};
    line-height: ${theme.typography.lineHeight.normal};
    margin-bottom: ${theme.spacing[8]};
    background-color: ${theme.colors.white};
    padding: ${theme.spacing[4]};
    border: ${theme.borderWidth.default} solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.sm};
    box-shadow: ${theme.shadows.sm};
  }

  .hero-actions {
    display: flex;
    gap: ${theme.spacing[4]};
    flex-wrap: wrap;
  }

  /* Override Button styles */
  ${Button} {
    border-color: ${theme.colors.border};

    &:hover:not(:disabled) {
      background-color: ${theme.colors.accent.red};
      transform: translate(-2px, -2px);
      box-shadow: ${theme.shadows.xl};
    }

    &:active:not(:disabled) {
      transform: translate(8px, 8px);
      box-shadow: none;
    }
  }

  .hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .placeholder-image {
    background-color: ${theme.colors.accent.pink};
    border-radius: ${theme.borderRadius.md};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.black};
    font-weight: ${theme.typography.fontWeight.black};
    font-size: ${theme.typography.fontSize['2xl']};
    text-transform: uppercase;
    border: ${theme.borderWidth.thick} solid ${theme.colors.border};
    box-shadow: ${theme.shadows.lg};
    transform: rotate(2deg);
    transition: all ${theme.transitions.base};

    &:hover {
      transform: rotate(2deg) translate(-2px, -2px);
      box-shadow: ${theme.shadows.xl};
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: ${theme.spacing[10]} ${theme.spacing[4]};
    gap: ${theme.spacing[8]};
    transform: rotate(0deg);

    h1 {
      font-size: ${theme.typography.fontSize['3xl']};
      text-shadow:
        2px 2px 0 ${theme.colors.secondary.main},
        4px 4px 0 ${theme.colors.black};
    }

    p {
      font-size: ${theme.typography.fontSize.base};
    }

    .placeholder-image {
      transform: rotate(0deg);

      &:hover {
        transform: rotate(0deg) translate(-2px, -2px);
      }
    }
  }
`;

export default StyledHero;
