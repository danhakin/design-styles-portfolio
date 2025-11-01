import styled from 'styled-components';
import BaseHeader from '../../../../layouts/Header';
import Button from '../common/Button';
import { neobrutalismTheme as theme } from '../../theme';

// Create a wrapper component that passes styled components as props
const HeaderWithStyledComponents = (props) => (
  <BaseHeader {...props} Button={Button} />
);

const StyledHeader = styled(HeaderWithStyledComponents)`
  background-color: ${theme.colors.white};
  border-bottom: ${theme.borderWidth.thick} solid ${theme.colors.border};
  padding: ${theme.spacing[5]} ${theme.spacing[8]};
  box-shadow: 0 8px 0 ${theme.colors.black};
  position: relative;

  /* Add extra visual weight */
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.borderWidth.default};
    left: 0;
    right: 0;
    height: ${theme.borderWidth.default};
    background-color: ${theme.colors.border};
  }

  .header-container {
    max-width: ${theme.layout.maxWidth};
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacing[8]};
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

  .logo {
    font-family: ${theme.typography.fontFamily.heading};
    font-size: ${theme.typography.fontSize['2xl']};
    font-weight: ${theme.typography.fontWeight.black};
    color: ${theme.colors.black};
    text-decoration: none;
    letter-spacing: ${theme.typography.letterSpacing.tight};
    text-transform: uppercase;
    position: relative;
    padding: ${theme.spacing[2]} ${theme.spacing[3]};
    background-color: ${theme.colors.secondary.main};
    border: ${theme.borderWidth.default} solid ${theme.colors.border};
    box-shadow: ${theme.shadows.sm};
    transform: rotate(-1deg);
    transition: all ${theme.transitions.fast};

    &:hover {
      transform: rotate(-1deg) translate(-1px, -1px);
      box-shadow: 3px 3px 0px ${theme.colors.border};
    }

    &:active {
      transform: rotate(-1deg) translate(2px, 2px);
      box-shadow: none;
    }
  }

  .main-nav {
    display: flex;
    gap: ${theme.spacing[4]};
    align-items: center;
  }

  .nav-link {
    font-family: ${theme.typography.fontFamily.primary};
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.black};
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: ${theme.typography.letterSpacing.wide};
    transition: all ${theme.transitions.fast};
    padding: ${theme.spacing[2]} ${theme.spacing[4]};
    border: ${theme.borderWidth.default} solid transparent;
    position: relative;

    &:hover {
      border-color: ${theme.colors.border};
      background-color: ${theme.colors.gray[100]};
      box-shadow: ${theme.shadows.sm};
    }

    &:active {
      transform: translate(2px, 2px);
      box-shadow: none;
    }
  }

  .header-actions {
    display: flex;
    gap: ${theme.spacing[3]};
    align-items: center;
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[4]};

    .header-container {
      flex-direction: column;
      align-items: flex-start;
      gap: ${theme.spacing[4]};
    }

    .logo {
      font-size: ${theme.typography.fontSize.xl};
    }

    .main-nav {
      flex-direction: column;
      gap: ${theme.spacing[3]};
      align-items: flex-start;
      width: 100%;
    }

    .nav-link {
      width: 100%;
    }
  }
`;

export default StyledHeader;
