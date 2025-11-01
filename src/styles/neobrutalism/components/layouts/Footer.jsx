import styled from 'styled-components';
import BaseFooter from '../../../../layouts/Footer';
import { neobrutalismTheme as theme } from '../../theme';

const StyledFooter = styled(BaseFooter)`
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  border-top: ${theme.borderWidth.thick} solid ${theme.colors.border};
  padding: ${theme.spacing[12]} ${theme.spacing[8]} ${theme.spacing[8]};
  margin-top: ${theme.spacing[16]};
  box-shadow: 0 -8px 0 ${theme.colors.black};
  position: relative;

  /* Add extra visual weight */
  &::before {
    content: '';
    position: absolute;
    top: -${theme.borderWidth.default};
    left: 0;
    right: 0;
    height: ${theme.borderWidth.default};
    background-color: ${theme.colors.border};
  }

  .footer-container {
    max-width: ${theme.layout.maxWidth};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing[10]};
  }

  .footer-main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: ${theme.spacing[8]};
  }

  .footer-section {
    h3 {
      font-family: ${theme.typography.fontFamily.heading};
      font-size: ${theme.typography.fontSize.lg};
      font-weight: ${theme.typography.fontWeight.black};
      color: ${theme.colors.secondary.main};
      margin-bottom: ${theme.spacing[4]};
      text-transform: uppercase;
      letter-spacing: ${theme.typography.letterSpacing.wide};
    }

    p {
      font-family: ${theme.typography.fontFamily.primary};
      font-size: ${theme.typography.fontSize.sm};
      color: ${theme.colors.white};
      line-height: ${theme.typography.lineHeight.relaxed};
      margin-bottom: ${theme.spacing[3]};
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: ${theme.spacing[2]};
    }

    a {
      font-family: ${theme.typography.fontFamily.primary};
      font-size: ${theme.typography.fontSize.sm};
      font-weight: ${theme.typography.fontWeight.bold};
      color: ${theme.colors.white};
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: ${theme.typography.letterSpacing.wide};
      display: inline-block;
      padding: ${theme.spacing[2]} ${theme.spacing[3]};
      border: ${theme.borderWidth.thin} solid transparent;
      transition: all ${theme.transitions.fast};

      &:hover {
        border-color: ${theme.colors.secondary.main};
        background-color: ${theme.colors.gray[900]};
        color: ${theme.colors.secondary.main};
        box-shadow: ${theme.shadows.yellow};
        transform: translate(-2px, -2px);
      }

      &:active {
        transform: translate(2px, 2px);
        box-shadow: none;
      }
    }
  }

  .footer-bottom {
    padding-top: ${theme.spacing[8]};
    border-top: ${theme.borderWidth.default} solid ${theme.colors.gray[800]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: ${theme.spacing[4]};

    p {
      font-family: ${theme.typography.fontFamily.primary};
      font-size: ${theme.typography.fontSize.sm};
      font-weight: ${theme.typography.fontWeight.bold};
      color: ${theme.colors.gray[400]};
      margin: 0;
      text-transform: uppercase;
      letter-spacing: ${theme.typography.letterSpacing.wide};
    }
  }

  .footer-social {
    display: flex;
    gap: ${theme.spacing[3]};

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      border: ${theme.borderWidth.default} solid ${theme.colors.border};
      border-radius: ${theme.borderRadius.sm};
      font-weight: ${theme.typography.fontWeight.black};
      text-decoration: none;
      box-shadow: ${theme.shadows.sm};
      transition: all ${theme.transitions.fast};

      &:hover {
        background-color: ${theme.colors.secondary.main};
        transform: translate(-2px, -2px);
        box-shadow: ${theme.shadows.DEFAULT};
      }

      &:active {
        transform: translate(2px, 2px);
        box-shadow: none;
      }
    }
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: ${theme.spacing[8]} ${theme.spacing[4]};

    .footer-main {
      grid-template-columns: 1fr;
      gap: ${theme.spacing[6]};
    }

    .footer-bottom {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export default StyledFooter;
